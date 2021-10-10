import parse from "html-react-parser";
import {useState, useEffect} from "react";
import linkIcon from "image/link.svg";

const DisplayQandA = (props) => {
  const [index, setIndex] = useState(0);
  //Check if props is empty to prevent the rendering of the DisplayQandA components before executing useEffect()
  if (props.list.length == 0) {
    return <></>;
  }
  const {questions, answers} = props.list;
  const listQandA = [questions, answers].flat();
  const moderate = (idx, isApproved) => {
    if (isApproved === true) {
      listQandA[idx].state = 1;
      console.log(listQandA[idx].state);
    } else if (isApproved === false) {
      listQandA[idx].state = 2;
    }
    //what should I do if isApproved is not a boleean? Return an error  but how?
  };
  return (
    <>
      <p className="text-2xl">{"Q&A to moderate: " + listQandA.length}</p>
      {/* Top bar with 4 buttons: Previous, Next, Approve and Refuse */}
      <div className="grid grid-cols-4 justify-items-stretch mb-5">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
            onClick={() => {
              if (index != 0) {
                setIndex(index - 1);
              }
            }}
          >
            Previous
          </button>
        </div>
        <div className="justify-self-end">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 m-4 rounded"
            onClick={() => {
              if (index < listQandA.length - 1) {
                setIndex(index + 1);
              }
              moderate(index, true);
            }}
          >
            Approve
          </button>
        </div>
        <div className="justify-self-start">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 m-4 rounded"
            onClick={() => {
              if (index < listQandA.length - 1) {
                setIndex(index + 1);
              }
              moderate(index, false);
            }}
          >
            Refuse
          </button>
        </div>
        <div className="justify-self-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
            onClick={() => {
              if (index < listQandA.length - 1) {
                setIndex(index + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
      {/* Profile bar with name image reputation and link */}
      <div className="flex rounded-lg p-2 mb-3 bg-white items-center">
        <img
          className="rounded-lg w-12 h-12 m-3"
          src={listQandA[index].profileImage}
          alt="a name"
        />
        <p className="text-2xl semi-bold m-3">{listQandA[index].displayName}</p>
        <p className="text-lg semi-bold m-3">
          {"Reputation score: " + listQandA[index].reputation}
        </p>
        <a
          href={listQandA[index].userLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5"
        >
          <img src={linkIcon} alt="link-icon" />
        </a>
      </div>
      {/* Title of the question + body of answer/question + upvote + link */}
      <div className="rounded-lg p-5 mb-10 bg-white divide-y divide-color-black">
        <div className="flex flex-row items-center">
          <p className="text-2xl semi-bold pb-2">{listQandA[index].questionTitle}</p>
          <p className="text-lg semi-bold m-3">{"Upvote: " + listQandA[index].score}</p>
          <a
            href={listQandA[index].shareLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5"
          >
            <img src={linkIcon} alt="link-icon" />
          </a>
        </div>
        <div className="pt-5 space-y-2">{parse(listQandA[index].text)}</div>
      </div>
    </>
  );
};

const Moderation = () => {
  const [moderationList, setModerationList] = useState([]);
  useEffect(() => {
    //call API to ceramic to obtain list of question and answers ID + text + vote
    //const ModerationSchema = call API ceramic
    const ModerationList = ModerationSchema;
    setModerationList(ModerationList);
  }, []);
  return (
    <main className="flex flex-col">
      <div>
        <DisplayQandA list={moderationList} />
      </div>
    </main>
  );
};

export default Moderation;

//Hardcoded for now, waiting for the Ceramic call
const ModerationSchema = {
  questions: [
    {
      id: 100,
      score: 5,
      text: "<p>I am writing some smart contract code that needs to add liquidity to a Uniswap V2 pair.</p>\n<p>I have already performed some validation checks at the start of my transaction function to ensure that the current price is acceptable for providing liquidity.</p>\n<p>My contract holds a lot of <code>Token A</code> and a small bit of <code>Token B</code>.</p>\n<p>I would like my contract to use all remaining <code>Token B</code> for providing liquidity, along with whatever amount of Token A that is neccessary.</p>\n<p>This means I would like to specify an <strong>exact amount</strong> of <code>Token B</code>, and let Uniswap calculate how much <code>Token A</code> to take away from me.</p>\n<p>Is this the correct way to achieve this?</p>\n<pre><code>uint exactTokenBAmount = _tokenB.balanceOf(address(this));\n_tokenA.approve(address(_router), 2 ** 256 - 1);\n_tokenB.approve(address(_router), exactTokenBAmount);\n_router.addLiquidity(address(_tokenA), address(_tokenB), 0, exactTokenBAmount, 0, exactTokenBAmount, address(this), block.timestamp);\n</code></pre>\n<p>As you can see, I am specifying the exact amount for <code>Token B</code>, but specifying <code>0</code> for <code>Token A</code> in the hopes that Uniswap can calculate this amount itself.</p>\n<p>Are there any problems with this way of doing it, and if so, is there another way I should be doing this?</p>\n",
      questionTitle:
        "Solidity - Is this the correct way to add liquidity to uniswap with exact amount at current price?",
      shareLink: "https://ethereum.stackexchange.com/a/107170",
      state: 0,
      displayName: "David Callanan",
      reputation: 268,
      profileImage:
        "https://www.gravatar.com/avatar/991c4e6d0872e18880e3e0ff51cdf5a2?s=128&d=identicon&r=PG",
      userLink: "https://ethereum.stackexchange.com/users/67306/david-callanan",
    },
    {
      id: 200,
      score: 2,
      text: "<p> already performed some validation checks at the start of my transaction function to ensure that the current price is acceptable for providing liquidity.</p>\n<p>My contract holds a lot of <code>Token A</code> and a small bit of <code>Token B</code>.</p>\n<p>I would like my contract to use all remaining <code>Token B</code> for providing liquidity, along with whatever amount of Token A that is neccessary.</p>\n<p>This means I would like to specify an <strong>exact amount</strong> of <code>Token B</code>, and let Uniswap calculate how much <code>Token A</code> to take away from me.</p>\n<p>Is this the correct way to achieve this?</p>\n<pre><code>uint exactTokenBAmount = _tokenB.balanceOf(address(this));\n_tokenA.approve(address(_router), 2 ** 256 - 1);\n_tokenB.approve(address(_router), exactTokenBAmount);\n_router.addLiquidity(address(_tokenA), address(_tokenB), 0, exactTokenBAmount, 0, exactTokenBAmount, address(this), block.timestamp);\n</code></pre>\n<p>As you can see, I am specifying the exact amount for <code>Token B</code>, but specifying <code>0</code> for <code>Token A</code> in the hopes that Uniswap can calculate this amount itself.</p>\n<p>Are there any problems with this way of doing it, and if so, is there another way I should be doing this?</p>\n",
      questionTitle: "something title",
      shareLink: "https://ethereum.stackexchange.com/a/107170",
      state: 0,
      displayName: "David Callanan",
      reputation: 268,
      profileImage:
        "https://www.gravatar.com/avatar/991c4e6d0872e18880e3e0ff51cdf5a2?s=128&d=identicon&r=PG",
      userLink: "https://ethereum.stackexchange.com/users/67306/david-callanan",
    },
    {
      id: 300,
      score: 10,
      text: "<p> needs to add liquidity to a Uniswap V2 pair.</p>\n<p>I have already performed some validation checks at the start of my transaction function to ensure that the current price is acceptable for providing liquidity.</p>\n<p>My contract holds a lot of <code>Token A</code> and a small bit of <code>Token B</code>.</p>\n<p>I would like my contract to use all remaining <code>Token B</code> for providing liquidity, along with whatever amount of Token A that is neccessary.</p>\n<p>This means I would like to specify an <strong>exact amount</strong> of <code>Token B</code>, and let Uniswap calculate how much <code>Token A</code> to take away from me.</p>\n<p>Is this the correct way to achieve this?</p>\n<pre><code>uint exactTokenBAmount = _tokenB.balanceOf(address(this));\n_tokenA.approve(address(_router), 2 ** 256 - 1);\n_tokenB.approve(address(_router), exactTokenBAmount);\n_router.addLiquidity(address(_tokenA), address(_tokenB), 0, exactTokenBAmount, 0, exactTokenBAmount, address(this), block.timestamp);\n</code></pre>\n<p>As you can see, I am specifying the exact amount for <code>Token B</code>, but specifying <code>0</code> for <code>Token A</code> in the hopes that Uniswap can calculate this amount itself.</p>\n<p>Are there any problems with this way of doing it, and if so, is there another way I should be doing this?</p>\n",
      questionTitle: "something else title",
      shareLink: "https://ethereum.stackexchange.com/a/107170",
      state: 0,
      displayName: "David Callanan",
      reputation: 268,
      profileImage:
        "https://www.gravatar.com/avatar/991c4e6d0872e18880e3e0ff51cdf5a2?s=128&d=identicon&r=PG",
      userLink: "https://ethereum.stackexchange.com/users/67306/david-callanan",
    },
  ],
  answers: [
    {
      id: 101,
      score: 2,
      text: "Solidity - Is this the correct way to add liquidity to uniswap with exact amount at current price?",
      questionTitle:
        "Solidity - Is this the correct way to add liquidity to uniswap with exact amount at current price?",
      shareLink: "https://ethereum.stackexchange.com/a/107170",
      state: 0,
      displayName: "David Callanan",
      reputation: 268,
      profileImage:
        "https://www.gravatar.com/avatar/991c4e6d0872e18880e3e0ff51cdf5a2?s=128&d=identicon&r=PG",
      userLink: "https://ethereum.stackexchange.com/users/67306/david-callanan",
    },
    {
      id: 201,
      score: 7,
      text: " way to add liquidity to uniswap with exact amount at current price?",
      questionTitle: "something orsdbvf title",
      shareLink: "https://ethereum.stackexchange.com/a/107170",
      state: 0,
      displayName: "David Callanan",
      reputation: 268,
      profileImage:
        "https://www.gravatar.com/avatar/991c4e6d0872e18880e3e0ff51cdf5a2?s=128&d=identicon&r=PG",
      userLink: "https://ethereum.stackexchange.com/users/67306/david-callanan",
    },
    {
      id: 301,
      score: 15,
      text: "amount at current price?",
      questionTitle: "somethtrrtbt gnz itle",
      shareLink: "https://ethereum.stackexchange.com/a/107170",
      state: 0,
      displayName: "David Callanan",
      reputation: 268,
      profileImage:
        "https://www.gravatar.com/avatar/991c4e6d0872e18880e3e0ff51cdf5a2?s=128&d=identicon&r=PG",
      userLink: "https://ethereum.stackexchange.com/users/67306/david-callanan",
    },
  ],
};

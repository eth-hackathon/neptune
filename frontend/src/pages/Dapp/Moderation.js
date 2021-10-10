import parse from "html-react-parser";
import {useState, useEffect} from "react";
import linkIcon from "image/link.svg";

const DisplayQandA = (props) => {
  const [index, setIndex] = useState(0);
  const [indexMod, setIndexMod] = useState(0);
  //Check if props is empty to prevent the rendering of the DisplayQandA components before executing useEffect()
  if (props.list.length === 0) {
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
    setIndexMod(indexMod + 1);
    //what should I do if isApproved is not a boleean? Return an error  but how?
  };
  return (
    <>
      <div className="flex flex-row justify-between">
        <p className="text-2xl">{"Q&A to moderate: " + (listQandA.length - indexMod)}</p>
        <p className="text-2xl">{index + 1 + "/" + listQandA.length}</p>
      </div>
      {/* Top bar with 4 buttons: Previous, Next, Approve and Refuse */}
      <div className="grid grid-cols-4 justify-items-stretch mb-5">
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
            onClick={() => {
              if (index !== 0) {
                setIndex(index - 1);
              }
            }}
          >
            Previous
          </button>
        </div>
        <div className="justify-self-end">
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
        <div className="justify-self-start">
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
      score: 11,
      text: "<p>I am trying to compute a Uniswap v3 pool prize.</p>\n<p>I can get the square root price of Q64.96 number as <code>uint160</code> (e.g., <code>1234217676608908277512433764</code> - value of DAI/ETH pool (price at that time around 1 ETH for 4090 DAI)).</p>\n<p>This can be retrieved via <code>IUniswapV3PoolState.slot0()</code></p>\n<p>As the function docstring says: &quot;sqrtPriceX96 The current price of the pool as a sqrt(token1/token0) Q64.96 value&quot;</p>\n<p>How can I convert this number to <code>uint256</code>?</p>\n<p>The calculated price should suggest the value of 1 ETH for 4090 DAI</p>\n<p>Is there any other way of getting the Uniswap V3 pair price?</p>\n<p>The answer would preferably be in solidity, but other answers are also acceptable.</p>\n<p><strong>Unsuccessful attempt</strong></p>\n<p>I tried squaring the number <code>1234217676608908277512433764</code> and then shifting it by 96, but the result was <code>1.922666416729829e+25</code> which doesn't seem too be correct.</p>\n<p><code>(1234217676608908277512433764^2) &gt;&gt; 96 = 1.922666416729829e+25</code></p>\n",
      questionTitle: "Computing the Uniswap V3 pair price from Q64.96 number",
      shareLink:
        "https://ethereum.stackexchange.com/questions/98685/computing-the-uniswap-v3-pair-price-from-q64-96-number",
      state: 0,
      displayName: "pipip",
      reputation: 111,
      profileImage:
        "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=128",
      userLink: "https://ethereum.stackexchange.com/users/72300/pipip",
    },
    {
      id: 200,
      score: 2,
      text: "<p>Let's say the instantaneous price of <code>ETH/USDT</code> pair is 2000.</p>\n<p>If I trade a lot of ETH for USDT, there could be a lot of slippage, and my trade might fulfill at 1950 USDT per ETH.</p>\n<p>Let's say I'm ok with trading at 1950 USDT. How can I calculate the max amount of ETH I can trade at this price (i.e. where 1950 is the average fulfillment price)?</p>\n<p>How can I calculate this in either direction, either from ETH to USDT or vice versa, in Solidity, using the Uniswap V2 interface?</p>\n",
      questionTitle:
        "Uniswap V2 calculate quantity tradable at target execution price in Solidity?",
      shareLink:
        "https://ethereum.stackexchange.com/questions/107159/uniswap-v2-calculate-quantity-tradable-at-target-execution-price-in-solidity",
      state: 0,
      displayName: "David Callanan",
      reputation: 268,
      profileImage:
        "https://www.gravatar.com/avatar/991c4e6d0872e18880e3e0ff51cdf5a2?s=128&d=identicon&r=PG",
      userLink: "https://ethereum.stackexchange.com/users/67306/david-callanan",
    },
    {
      id: 300,
      score: 8,
      text: '<p>I want to deploy pre-compiled Smart Contract bytecode using Truffle migrations. Specifically, it is the Uniswap V2 Factory contract.</p>\n<p>In the <a href="https://uniswap.org/docs/v2/smart-contract-integration/quick-start/" rel="noreferrer">Uniswap V2 documentation</a> there is a cliffhanger, where they mention to use:</p>\n<pre class="lang-js prettyprint-override"><code>const UniswapV2FactoryBytecode = require(\'@uniswap/v2-core/build/UniswapV2Factory.json\').bytecode\n</code></pre>\n<p>And then deploy it using Truffle (but do not include an example). However, I cannot get the deployment to work. Here is my migration script:</p>\n<pre class="lang-js prettyprint-override"><code>const UniswapV2FactoryBytecode = require(\'@uniswap/v2-core/build/UniswapV2Factory.json\').bytecode\nmodule.exports = function(_deployer, network, accounts) {\n    _deployer.deploy(UniswapV2FactoryBytecode, accounts[0])\n};\n</code></pre>\n<p>Note the <code>UniswapV2Factory</code> constructor requires a <code>_feeToSetter</code> address which is why I pass <code>accounts[0]</code> as a parameter.</p>\n<p>When I run using <code>truffle migrate --reset</code> the following error is returned:</p>\n<pre><code>TypeError: contract.detectNetwork is not a function\n</code></pre>\n<p>Can anyone help point to a solution get this to work?</p>\n',
      questionTitle: "Deploy pre compiled bytecode using truffle migrations deployer api",
      shareLink:
        "https://ethereum.stackexchange.com/questions/87523/deploy-pre-compiled-bytecode-using-truffle-migrations-deployer-api",
      state: 0,
      displayName: "Darren Jensen",
      reputation: 535,
      profileImage: "https://i.stack.imgur.com/WqIWU.jpg?s=128&g=1",
      userLink: "https://ethereum.stackexchange.com/users/60955/darren-jensen",
    },
  ],
  answers: [
    {
      id: 101,
      score: 2,
      text: "<p><strong>TL;DR</strong> - Final formula is at the end. It would be great if someone can verify that I didn't make any mistakes.</p>\n<hr />\n<p>If we exchange token <code>x</code> for token <code>y</code>, as per the constant product formula:</p>\n<pre><code>x * y = k\n</code></pre>\n<p>Let <code>a</code> be the amount of <code>x</code> we are exchanging to get <code>b</code> amount of <code>y</code>. Therefore:</p>\n<pre><code>(x + a) * (y - b) = k\n</code></pre>\n<p>The execution price of the trade, by definition, is just <code>b / a</code>.</p>\n<p>If our target execution price is <code>e</code>, then <code>b / a = e</code> =&gt; <code>b = ea</code></p>\n<p>Therefore:</p>\n<pre><code>(x + a) * (y - ea) = k\n</code></pre>\n<p>But <code>x * y</code> is also equal to <code>k</code>, therefore:</p>\n<pre><code>x * y = (x + a) * (y - ea)\n</code></pre>\n<p>Now we can just rewrite the equation to get <code>a</code> in terms of the other variables.</p>\n<pre><code>x * y = x * (y - ea) + a * (y - ea)\nxy = xy - eax + ay - ea^2\n- eax + ay - ea^2 = 0\n-ea^2 + a(y - ex) = 0\n</code></pre>\n<p>We know <code>a</code> is not zero, else the price would be undefined which is not possible. Because <code>a</code> is not zero, we can safely divide across by <code>a</code>:</p>\n<pre><code>-ea + y - ex = 0\n</code></pre>\n<p>Now a few more slight adjustments:</p>\n<pre><code>ea = y - ex\na = (y - ex) / e\na = (y / e) - x\n</code></pre>\n<hr />\n<p><strong>So this is the final formula:</strong></p>\n<pre><code>a = (y / e) - x\n</code></pre>\n<p>where <code>a</code> is the maximum amount we can trade to get an execution price of <code>e</code> or better, and <code>x</code> and <code>y</code> are the number of input and output tokens in the pool before the trade respectively.</p>\n<hr />\n<p><strong>TEST CASE</strong> - where 1 ETH is worth 2,000 USD</p>\n<pre><code>x = 100 ETH\ny = 200,000 USD\ne = 1,950\n\na = (y / e) - x\n  = (200,000 / 1,950) - 100\n  = 2.564 ETH\n</code></pre>\n",
      questionTitle:
        "Uniswap V2 calculate quantity tradable at target execution price in Solidity?",
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
      score: 13,
      text: "<blockquote>\n  <p>“The price of a given token on a given exchange can be calculated as the exchange contract's token_balance divided by its ether_balance.”</p>\n</blockquote>\n\n<p>This description means:</p>\n\n<ol>\n<li><p>On-chain price: In opposed to off-chain price, which is what you may see on various exchanges, and which can of course be different on every exchange.</p></li>\n<li><p>Spot price: This is the <strong>rate</strong> that you will get for 1 wei, but it doesn't tell you how much you will get in <strong>return</strong> for more than 1 wei.</p></li>\n</ol>\n\n<p>It is important to understand the difference between <em>rate</em> and <em>return</em> here.</p>\n\n<p>A rate tells you how much you will get for 1 unit.</p>\n\n<p>This is a common method of interaction when you go to any exchange on any street in any country.</p>\n\n<p>For example, you go to an exchange in London and ask how much is the dollar rate, and they will tell you 1 pound = 2 dollars.</p>\n\n<p>In this real-world example, the terms <em>rate</em> and <em>return</em> are equivalent, because the rate is <strong>linear</strong>, which means that for 2 pounds you'll get 4 dollars, for 3 pounds you'll get 6 dollars and so on.</p>\n\n<p>On UniSwap's trading system (as in many other trading systems on the blockchain), <em>rate</em> and <em>return</em> are <strong>not</strong> equivalent.</p>\n\n<p>For example, if your ETH/TKN spot-price is 10 on UniSwap, then it means that for 1 wei of your TKN, you will get 10 wei of ETH.</p>\n\n<p>But for 1234 wei of your TKN, you will necessarily get less than 12340 wei of ETH.</p>\n\n<p>This is because your conversion is subjected to slippage (loss).</p>\n\n<p>It may lead you to think that this spot-price is a charade (a hoax).</p>\n\n<p>But it is nevertheless useful for some measurements of a pool.</p>\n\n<p>However, you should definitely not rely on this <em>rate</em> in order to calculate the expected <em>return</em> for some given amount.</p>\n\n<p>In order to do that, you may use <code>Y * x / (X + x)</code>, where:</p>\n\n<ul>\n<li><code>x</code> is your input amount of source tokens</li>\n<li><code>X</code> is the balance of the pool in the source token</li>\n<li><code>Y</code> is the balance of the pool in the target token</li>\n</ul>\n\n<p>Note that as your input amount gets closer to 1, the expected <em>return</em> becomes closer to the <em>rate</em> (i.e., the spot-price, which as quoted from your question at the top of this answer, is <code>Y / X</code>).</p>\n",
      questionTitle: "How to infer token price from ethereum blockchain UniSwap data?",
      shareLink: "https://ethereum.stackexchange.com/a/83702",
      state: 0,
      displayName: "goodvibration",
      reputation: 21385,
      profileImage:
        "https://www.gravatar.com/avatar/66a5c6bdca5a30cc6fdacd92fc5745a2?s=128&d=identicon&r=PG&f=1",
      userLink: "https://ethereum.stackexchange.com/users/16043/goodvibration",
    },
    {
      id: 301,
      score: 6,
      text: "<p>You are not providing enough information about your case, but most likely you have been front-run.</p>\n<p>When you are giving away free money on the blockchain, some people will take it. When you announce your request to buy some asset on Uniswap and you specify &quot;my slippage is 100 bucks&quot;, you are giving away free money for the amount 100 bucks. If I have the asset I can sell it to you and make profit. Is this an attack? Is it illegal for me to make profit? Obviously not.</p>\n<p>Now, what if the person doesn't have the asset, but can buy it just before you and sell it to you? This is what front running is, and this is what happened to you. Somebody just sold you an asset they bought earlier by putting higher GasPrice on their transaction, enough higher for their transaction to be executed before yours. Since you are specifying that your slippage is 100 bucks, you giving away an opportunity for evyerone to make free money by buying this asset before your and selling it to you right after they bought it. Front-running is not an attack. Use a lower slippage and that's it.</p>\n<p>There are many studies about front running, feed the keywords &quot;ethereum is a dark forest&quot; at Google and they will show up. This is the general term, but a lot have been written on the subject.</p>\n<ul>\n<li>The bot is monitoring my etherscan account ?</li>\n</ul>\n<p>They are monitoring transaction pool and check PENDING transactions of everyone.</p>\n<ul>\n<li>Is it possible to counter them</li>\n</ul>\n<p>no because they are not doing anything bad, everybody makes money on something. If you don't like being front-runned all the time, don't give away a lot of free money to the blockchain</p>\n",
      questionTitle: "I got sandwich attacked on my transaction",
      shareLink: "https://ethereum.stackexchange.com/a/93171",
      state: 0,
      displayName: "Nulik",
      reputation: 3056,
      profileImage:
        "https://www.gravatar.com/avatar/a469120d35647d9aa50646cb4d778c71?s=128&d=identicon&r=PG&f=1",
      userLink: "https://ethereum.stackexchange.com/users/19683/nulik",
    },
  ],
};

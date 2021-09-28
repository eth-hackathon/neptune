import {Link} from "react-router-dom";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Incentivize tasks",
    description:
      "Publish questions & various issues to Stackoverflow, opening the door to a broader community for potential contributions.",
    icon: GlobeAltIcon,
  },
  {
    name: "Reward users",
    description:
      "Provide tokens or other wallet-enabled compensation to users for correctly answered questions.",
    icon: ScaleIcon,
  },
  {
    name: "Automate distribution",
    description:
      "Leverage Gnosis Safe Multisig for grants to help distribute rewards to contributors over customized epochs.",
    icon: LightningBoltIcon,
  },
  {
    name: "One-stop-shop for contributors",
    description:
      "Both protocol- and user-based dashboards allow for a single platform to be used across many protocols.",
    icon: AnnotationIcon,
  },
];

const About = () => (
  <main className="py-12 bg-white">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Neptune Manifesto
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to build your DAO
        </p>
        <div className="mt-5 px-10 grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <p className="text-xl text-gray-500 lg:mx-auto">
              DAOs are made up of a lot of people willing to help, but it's hard to
              coordinate &amp; reward everyone correctly. Users have to sift through
              troves of information across disparate mediums like Discord, Twitter, and
              other various DAO specific tools – resulting in a high barrier-to-entry,
              especially, for non-crytpo natives.
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-500 lg:mx-auto">
              To lower this barrier, we're creating a{" "}
              <span className="text-indigo-600">financial layer built</span> on the
              world's go-to resource for open source Q&amp;A:{" "}
              <span className="text-indigo-600">
                <Link to="https://stackoverflow.com/">StackOverflow</Link>
              </span>
              . This allows protocols to incentivize an even broader developer community
              to answer questions &amp; help build its documentation while maintaining the
              comfort in using existing tooling.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="rounded-md shadow">
          <Link
            to="/docs"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  </main>
);

export default About;

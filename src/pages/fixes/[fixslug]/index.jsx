import React from "react";
import Image from "next/image";
import Head from "next/head";

import axios from "axios";

import { StateList } from "../../../components/state-list/StateList";
import { ArticleLayout } from "../../../components/layout/ArticleLayout";
import { RelatedLinks } from "../../../components/related-links/RelatedLinks";

const FixPage = (props) => {
  const {
    allStateLinks: stateLinks,
    relatedLinks,
    fix: { headerImageSrc: imageSrc, fixTitle: title },
  } = props.data;
  console.log(props.data);
  return (
    <ArticleLayout>
      <Head>
        <title>AutoTechIQ - {title}</title> {/*для SEO*/}
      </Head>
      <div className="w-full">
        <div className="relative  h-full">
          <Image
            src={imageSrc}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt={title}
          />
          <div className="absolute top-0 flex justify-start w-1/2 items-center h-full">
            <div className="z-50 text-white text-4xl md:text-7xl   pl-5">
              {title}
            </div>
          </div>
        </div>
        <section className="w-3/4 mx-auto">
          <h2 className="text-blue-900 text-4xl font-bold my-6  ">
            Other Fixes that either are related or dependent on {title}
          </h2>
          <RelatedLinks list={relatedLinks} />
          <StateList title={title} stateLinks={stateLinks} />
        </section>
      </div>
    </ArticleLayout>
  );
};

export default FixPage;

export const getServerSideProps = async (context) => {
  const {
    params: { fixslug: paramString },
  } = context;

  const fixPagesList = await axios.get(
    "https://dev.autotechiq.com/api-test-task/PSS3TYRM4U4QR3WSLX4T5DRZ83DAOXY2/fixes"
  );

  const currentFixPageData = fixPagesList.data.find(
    (item) => item.fix.fixslug === paramString
  );

  return { props: { data: currentFixPageData } };
};

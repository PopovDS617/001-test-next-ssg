import { useState, useEffect } from "react";
import Link from "next/link";

import axios from "axios";

import { ArticleLayout } from "../components/layouts/ArticleLayout";
import { SearchBar } from "../components/search/SearchBar";
import { LinkList } from "../components/fix-links-list/LinkList";

export default function Home(props) {
  const [listData, setListData] = useState(props.data);

  const handleSearch = (query) => {
    if (query === "" || query.length === 0) {
      setListData(props.data);
      return;
    }

    if (query.length <= 2) {
      setListData(props.data);
    }

    if (query.length > 2) {
      const filter = listData.filter((item) =>
        item.fixTitle.toLowerCase().includes(query.toLowerCase())
      );

      setListData(filter);
    }
  };

  return (
    <ArticleLayout>
      <div className="w-3/4">
        <nav className="my-10 text-left">Home/ Fixes</nav>
        <div>
          <div className="flex w-full justify-between mb-8">
            <h1 className="text-blue-900 text-7xl font-bold"> Fixes</h1>
            <SearchBar onSearch={handleSearch} />
          </div>
          <LinkList list={listData} />
        </div>
      </div>
    </ArticleLayout>
  );
}

export const getServerSideProps = async (context) => {
  const fixPagesList = await axios.get(
    "https://dev.autotechiq.com/api-test-task/PSS3TYRM4U4QR3WSLX4T5DRZ83DAOXY2/fixes"
  );

  const fixPagesLinks = fixPagesList.data.map((item) => {
    return item.fix;
  });

  return { props: { data: fixPagesLinks } };
};

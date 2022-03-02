import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import sampleSlice from "./../src/shared/slices/sample-slice";
import { Table } from "antd";

interface Lists {
  country: {};
}

const App = () => {
  const { getSampleData } = sampleSlice.actions;
  const { data } = useSelector((state: any) => state.sample);
  const dispatch = useDispatch();
  const [itemLists, setItemLists] = useState<Lists[]>([]);

  useEffect(() => {
    dispatch(getSampleData());
  }, []);

  useEffect(() => {
    if (data) {
      setItemLists(data?.data?.listings);
    }
  }, [data]);

  const columns: any = [
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: () => (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
        </>
      ),
    },
    {
      title: "Listing",
      key: "listing_number",
      dataIndex: "listing_number",
    },
    {
      title: "Public title",
      dataIndex: "public_title",
      key: "public_title",
    },
    {
      title: "Niches and Security",
      dataIndex: "niches",
      key: "niches",
      render: (text: any, record: any) => {
        return ` ${record.niches[0].niche} pc/s`;
      },
    },
    {
      title: "monetizations sds",
      dataIndex: "monetizations",
      key: "monetizations",
      render: (text: any, record: any) =>
        record?.monetizations.map((r: any) => r.monetization).join(),
    },
    {
      title: "Price",
      dataIndex: "listing_price",
      key: "listing_price",
      sorter: (a: any, b: any) => a.listing_price - b.listing_price,
      render: (text: any, record: any) => {
        return ` $${text.toLocaleString("en-US")} `;
      },
    },
    {
      title: "Monthly Profit",
      dataIndex: "average_monthly_net_profit",
      key: "average_monthly_net_profit",
      sorter: (a: any, b: any) =>
        a.average_monthly_net_profit - b.average_monthly_net_profit,
      render: (text: any, record: any) => {
        return ` $${text.toLocaleString("en-US")} `;
      },
    },
    {
      title: "multiple",
      dataIndex: "listing_multiple",
      key: "listing_multiple",
      sorter: (a: any, b: any) => a.listing_multiple - b.listing_multiple,

      render: (text: any, record: any) => {
        return ` ${text}x `;
      },
    },

    {
      title: "Seller Interview ",
      dataIndex: "seller_accepting_calls",
      key: "seller_accepting_calls",
      filters: [
        {
          text: (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          ),
          value: "true",
        },
        {
          text: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ),
          value: "false",
        },
      ],
      onFilter: (value: any, record: any) =>
        record.seller_accepting_calls.toString().indexOf(value) === 0,

      render: (text: any, record: any) => {
        if (text === true) {
          return (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          );
        } else {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          );
        }
      },
    },
  ];
  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={itemLists}
        onChange={onChange}
        key="id"
      />
    </>
  );
};

export default App;

import Cover from "../../../components/shared/Cover";
import ParallaxBG from "../../../assets/cityBg.jpg";
import Container from "../../../components/ui/Container";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../../../utils/accordion";
import { Table, TableColumnsType, Tooltip } from "antd";

interface DataType {
  key: React.Key;
  board: string;
  year: number;
  appeared: number;
  passed: number;
  failed: number;
  aPlus: number;
  passRate: number;
  boardRank: number;
  nationalRank: number;
  districtRank: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    width: 50,
    align: "center",
  },
  {
    title: "Board",
    dataIndex: "board",
    key: "board",
    render: (text) => <a>{text}</a>,
    width: 50,
    align: "center",
  },
  {
    title: "Appeared",
    dataIndex: "appeared",
    key: "appeared",
    width: 70,
    align: "center",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: "Passed",
    dataIndex: "passed",
    key: "passed",
    width: 60,
    align: "center",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: "Failed",
    dataIndex: "failed",
    key: "failed",
    width: 60,
    align: "center",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: "A+",
    dataIndex: "aPlus",
    key: "aPlus",
    width: 50,
    align: "center",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: "Pass Rate",
    dataIndex: "passRate",
    width: 70,
    align: "center",
    key: "passRate",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address} %
      </Tooltip>
    ),
  },
  {
    title: "Board Rank",
    dataIndex: "boardRank",
    key: "boardRank",
    width: 70,
    align: "center",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: "National Rank",
    dataIndex: "nationalRank",
    width: 70,
    align: "center",
    key: "nationalRank",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: "District Rank",
    dataIndex: "districtRank",
    key: "districtRank",
    width: 70,
    align: "center",
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    board: "Dhaka",
    year: 2019,
    appeared: 89,
    passed: 89,
    failed: 0,
    aPlus: 15,
    passRate: 100.0,
    boardRank: 435,
    nationalRank: 1778,
    districtRank: 220,
  },
  {
    key: "2",
    board: "Dhaka",
    year: 2018,
    appeared: 82,
    passed: 82,
    failed: 0,
    aPlus: 7,
    passRate: 100.0,
    boardRank: 409,
    nationalRank: 1393,
    districtRank: 171,
  },
  {
    key: "3",
    board: "Dhaka",
    year: 2017,
    appeared: 97,
    passed: 97,
    failed: 0,
    aPlus: 55,
    passRate: 100.0,
    boardRank: 165,
    nationalRank: 426,
    districtRank: 85,
  },
  {
    key: "4",
    board: "Dhaka",
    year: 2016,
    appeared: 104,
    passed: 104,
    failed: 0,
    aPlus: 57,
    passRate: 100.0,
    boardRank: 216,
    nationalRank: 576,
    districtRank: 96,
  },
  {
    key: "5",
    board: "Dhaka",
    year: 2015,
    appeared: 128,
    passed: 128,
    failed: 0,
    aPlus: 50,
    passRate: 100.0,
    boardRank: 263,
    nationalRank: 731,
    districtRank: 119,
  },
  {
    key: "6",
    board: "Dhaka",
    year: 2014,
    appeared: 113,
    passed: 113,
    failed: 0,
    aPlus: 48,
    passRate: 100.0,
    boardRank: 161,
    nationalRank: 502,
    districtRank: 91,
  },
  {
    key: "7",
    board: "Dhaka",
    year: 2013,
    appeared: 108,
    passed: 108,
    failed: 0,
    aPlus: 30,
    passRate: 100.0,
    boardRank: 348,
    nationalRank: 1000,
    districtRank: 169,
  },
  {
    key: "8",
    board: "Dhaka",
    year: 2012,
    appeared: 93,
    passed: 93,
    failed: 0,
    aPlus: 15,
    passRate: 100.0,
    boardRank: 250,
    nationalRank: 643,
    districtRank: 129,
  },
  {
    key: "9",
    board: "Dhaka",
    year: 2011,
    appeared: 78,
    passed: 77,
    failed: 1,
    aPlus: 22,
    passRate: 98.72,
    boardRank: 126,
    nationalRank: 325,
    districtRank: 77,
  },
  {
    key: "10",
    board: "Dhaka",
    year: 2010,
    appeared: 76,
    passed: 76,
    failed: 0,
    aPlus: 4,
    passRate: 100.0,
    boardRank: 245,
    nationalRank: 571,
    districtRank: 135,
  },
];

const ResultsPage = () => {
  return (
    <div className="font-displayOne">
      <Cover image={ParallaxBG} text="Results" />
      <Container>
        <h1 className="text-3xl font-semibold text-center mt-10">
          Board Results of <br /> Titas Gas Adarsha High School
        </h1>
        <p className="text-xl my-10 text-justify">
          Discover the academic accomplishments of Titas Gas Adarsha High School
          with our comprehensive board exam results. Delve into the achievements
          of our students as they showcase their dedication and academic
          excellence in the latest board examinations. Explore detailed insights
          into individual performances and overall school achievements,
          celebrating a year of hard work, perseverance, and success.
        </p>
        <div className="w-full mx-auto my-10">
          <Accordion defaultValue={"item-2"} multiple>
            <AccordionItem value="item-1">
              <AccordionHeader className="text-lg">
                JSC - Junior School Certificate
              </AccordionHeader>
              <AccordionPanel>
                <Table
                  className="font-displayOne"
                  columns={columns}
                  dataSource={data}
                  scroll={{ y: 340 }}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader className="text-lg">
                SSC - Secondary School Certificate
              </AccordionHeader>
              <AccordionPanel>
                UI components promote consistency, efficiency, and scalability
                in software development. They allow developers to reuse code,
                maintain a consistent look and feel across an application, and
                easily make updates or modifications without affecting the
                entire system.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <p className="my-10 text-xl text-justify">
          Congratulations to all the students, parents, and educators for their
          relentless effort and commitment. Your dedication has paved the way
          for these remarkable achievements. As we celebrate these successes,
          let us continue to strive for even greater heights in the pursuit of
          knowledge and excellence at Titas Gas Adarsha High School.
        </p>
      </Container>
    </div>
  );
};

export default ResultsPage;

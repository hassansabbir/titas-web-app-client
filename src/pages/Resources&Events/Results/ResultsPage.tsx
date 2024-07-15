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
import { getResults } from "../../../components/api/Result.api";
import { useQuery } from "@tanstack/react-query";

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
  exam: string;
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

const ResultsPage = () => {
  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: getResults,
  });

  const boardResults = data?.data?.data || [];
  const jscResults = boardResults.filter((i: DataType) => i.exam === "jsc");
  const sscResults = boardResults.filter((i: DataType) => i.exam === "ssc");

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
                  dataSource={jscResults}
                  scroll={{ y: 340 }}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader className="text-lg">
                SSC - Secondary School Certificate
              </AccordionHeader>
              <AccordionPanel>
                <Table
                  className="font-displayOne"
                  columns={columns}
                  dataSource={sscResults}
                  scroll={{ y: 340 }}
                />
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

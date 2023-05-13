import SpaceSection from "../common/spacemap/SpaceSection";
import SpaceWrapper from "../common/spacemap/SpaceWrapper";
import "./styles/roadmap.css";

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "1st Jun - 31st Aug",
      status: "DONE",
      phases: [
        {
          id: 1.1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "DONE",
        },
        {
          id: 1.2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "DONE",
        },
      ],
    },
    {
      title: "1st Sep - 31st Nov",
      status: "IN PROGRESS",
      phases: [
        {
          id: 2.1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "DONE",
        },
        {
          id: 2.2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "IN PROGRESS",
        },
        {
          id: 2.3,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "NOT STARTED",
        },
      ],
    },
    {
      title: "1st Dec - 28th Feb",
      status: "NOT STARTED",
      phases: [
        {
          id: 3.1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "NOT STARTED",
        },
        {
          id: 3.2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "NOT STARTED",
        },
      ],
    },
    {
      title: "1st Mar - 30th May",
      status: "NOT STARTED",
      phases: [
        {
          id: 4.1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "NOT STARTED",
        },
        {
          id: 4.2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id placeat exercitationem illo nemo corrupti quod pariatur? In, eaque. Veritatis qui deserunt recusandae alias, omnis id vel voluptate error ipsam.",
          status: "NOT STARTED",
        },
      ],
    },
  ];

  return (
    <div className="roadmap-site-container" id="roadmap">
      <div className="tok-title">Our Roadmap</div>
      <SpaceWrapper>
        {roadmapItems.map((item) => {
          return (
            <SpaceSection
              id={item.title}
              title={item.title}
              status={item.status}
              phases={item.phases}
            />
          );
        })}
      </SpaceWrapper>
    </div>
  );
};

export default Roadmap;

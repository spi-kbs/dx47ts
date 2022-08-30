import React, { useState } from 'react';
import {RegionClosedListItem, RegionListItem} from "./components/RegionListItem";
import {Region} from "./types/Prefecture"

function List2() {
  const regions = getRegions();

  // const [openRegionNames, setOpenRegionNames] = useState<string[]>([])

  // let tempFlg = [];
  // let tempFlg = [{name: string}];
  // interface tempFlg {flg: boolean};
  // interface tempFlg2 {
  //   list: {flg: boolean}[]
  // }
  // let tempFlg2: tempFlg2 = {
  //   list: [{
  //     flg: ""
  //   }]
  // };

  // for(let i=0; regions.length; i++){
  //   tempFlg2[i][useState(false)[0], useState(false)[1]];
  //   // const [openFlg, setOpenFlg] = useState(false);
  // }

  return (
    <dl>
      {/* {JSON.stringify(regions)} */}
      {/* {regions.map(({ name, area }, i) => {
        const isOpen = openRegionNames.includes(name);
        
        if (isOpen) {
          return <button onClick={() => setOpenRegionNames(openRegionNames.filter((openRegion) => openRegion !== name))}>{name}({regions.length})</button>
        } else {
          return (
            <React.Fragment>
              <button onClick={() => setOpenRegionNames(openRegionNames.concat(name))}>
                {name}({regions.length})
              </button>
              <RegionListItem name={name} area={area} key={i} />
            </React.Fragment>
          )
        }

        // return  (
        // <RegionListItem name={name} area={area} key={i} />
        // )
      })} */}

      {/* これがオリジナル  */}
      {regions.map(({ name, area }, i) => (
        // <RegionListItem name={name} area={area} key={i} />
        <RegionListItem name={name} area={area} key={i} />
      ))}


      {/* {regions.map((region, i) => (
        <RegionListItem name={region.name} area={region.area} key={i} />
      ))} */}

      {/* {regions.map((region, i) => (
        <RegionListItem {...region} key={i} />
      ))} */}


      {/* {regions.map((region, i) => (
        <RegionClosedListItem {...region} key={i} />
      ))} */}
    </dl>
  );
}

const matsuura = {
  name: 'matsuura'
}
const kobashi = {
  agen: 20
}

const merged = {
  ...matsuura,
  ...kobashi
}
// console.log(merged)
// {
//   name: 'matsuura'
//   age: 20
// }


const merged2 = {
  matsuura,
  kobashi
}
// console.log(merged)
// {
//   matsuura:{
//     name: 'matsuura'
//   },
//   kobashi: {
//     age: 20
//   }
// }


function getRegions(): Region[] {
  return [
    {
      name: "北海道地方",
      area: [{ name: "北海道", prefecture: "do" }],
    },
    {
      name: "東北地方",
      area: [
        { name: "青森県", prefecture: "ken" },
        { name: "岩手県", prefecture: "ken" },
        { name: "秋田県", prefecture: "ken" },
        { name: "宮城県", prefecture: "ken" },
        { name: "山形県", prefecture: "ken" },
        { name: "福島県", prefecture: "ken" },
      ],
    },
    {
      name: "関東地方",
      area: [
        { name: "茨城県", prefecture: "ken" },
        { name: "栃木県", prefecture: "ken" },
        { name: "群馬県", prefecture: "ken" },
        { name: "埼玉県", prefecture: "ken" },
        { name: "千葉県", prefecture: "ken" },
        { name: "東京都", prefecture: "to" },
        { name: "神奈川県", prefecture: "ken" },
      ],
    },
    {
      name: "中部地方",
      area: [
        { name: "新潟県", prefecture: "ken" },
        { name: "富山県", prefecture: "ken" },
        { name: "石川県", prefecture: "ken" },
        { name: "福井県", prefecture: "ken" },
        { name: "山梨県", prefecture: "ken" },
        { name: "長野県", prefecture: "ken" },
        { name: "岐阜県", prefecture: "ken" },
        { name: "静岡県", prefecture: "ken" },
        { name: "愛知県", prefecture: "ken" },
      ],
    },
    {
      name: "近畿地方",
      area: [
        { name: "三重県", prefecture: "ken" },
        { name: "滋賀県", prefecture: "ken" },
        { name: "京都府", prefecture: "fu" },
        { name: "大阪府", prefecture: "fu" },
        { name: "兵庫県", prefecture: "ken" },
        { name: "奈良県", prefecture: "ken" },
        { name: "和歌山県", prefecture: "ken" },
      ],
    },
    {
      name: "中国地方",
      area: [
        { name: "鳥取県", prefecture: "ken" },
        { name: "島根県", prefecture: "ken" },
        { name: "岡山県", prefecture: "ken" },
        { name: "広島県", prefecture: "ken" },
        { name: "山口県", prefecture: "ken" },
      ],
    },
    {
      name: "四国地方",
      area: [
        { name: "徳島県", prefecture: "ken" },
        { name: "香川県", prefecture: "ken" },
        { name: "愛媛県", prefecture: "ken" },
        { name: "高知県", prefecture: "ken" },
      ],
    },
    {
      name: "九州沖縄地方",
      area: [
        { name: "福岡県", prefecture: "ken" },
        { name: "佐賀県", prefecture: "ken" },
        { name: "長崎県", prefecture: "ken" },
        { name: "熊本県", prefecture: "ken" },
        { name: "大分県", prefecture: "ken" },
        { name: "宮崎県", prefecture: "ken" },
        { name: "鹿児島県", prefecture: "ken" },
        { name: "沖縄県", prefecture: "ken" },
      ],
    },
  ];
}
export default List2;

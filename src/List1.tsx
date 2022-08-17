import React from 'react';

const PrefectureListItem = ({name, prefecture}: {name: string, prefecture: string}) => {
  const colorBlue = { color: "blue" };
  const colorGreen = { color: "green" };

  return (
    <dd key={name} style={prefecture === 'ken' ? colorGreen : colorBlue}>
      {name}
    </dd>
  )
}
function List1() {
  const prefectureAll = getPrefecture();

  return (
    <dl>
      {prefectureAll.map(({name, prefecture}) => (
        <PrefectureListItem name={name} prefecture={prefecture}/>
      ))}
    </dl>
  );
}


function getPrefecture() {
  return [
    {name: '北海道', prefecture: 'do'},
    {name: '青森県', prefecture: 'ken'},
    {name: '岩手県', prefecture: 'ken'},
    {name: '秋田県', prefecture: 'ken'},
    {name: '宮城県', prefecture: 'ken'},
    {name: '山形県', prefecture: 'ken'},
    {name: '福島県', prefecture: 'ken'},
    {name: '茨城県', prefecture: 'ken'},
    {name: '栃木県', prefecture: 'ken'},
    {name: '群馬県', prefecture: 'ken'},
    {name: '埼玉県', prefecture: 'ken'},
    {name: '千葉県', prefecture: 'ken'},
    {name: '東京都', prefecture: 'to'},
    {name: '神奈川県', prefecture: 'ken'},
    {name: '新潟県', prefecture: 'ken'},
    {name: '富山県', prefecture: 'ken'},
    {name: '石川県', prefecture: 'ken'},
    {name: '福井県', prefecture: 'ken'},
    {name: '山梨県', prefecture: 'ken'},
    {name: '長野県', prefecture: 'ken'},
    {name: '岐阜県', prefecture: 'ken'},
    {name: '静岡県', prefecture: 'ken'},
    {name: '愛知県', prefecture: 'ken'},
    {name: '三重県', prefecture: 'ken'},
    {name: '滋賀県', prefecture: 'ken'},
    {name: '京都府', prefecture: 'fu'},
    {name: '大阪府', prefecture: 'fu'},
    {name: '兵庫県', prefecture: 'ken'},
    {name: '奈良県', prefecture: 'ken'},
    {name: '和歌山県', prefecture: 'ken'},
    {name: '鳥取県', prefecture: 'ken'},
    {name: '島根県', prefecture: 'ken'},
    {name: '岡山県', prefecture: 'ken'},
    {name: '広島県', prefecture: 'ken'},
    {name: '山口県', prefecture: 'ken'},
    {name: '徳島県', prefecture: 'ken'},
    {name: '香川県', prefecture: 'ken'},
    {name: '愛媛県', prefecture: 'ken'},
    {name: '高知県', prefecture: 'ken'},
    {name: '福岡県', prefecture: 'ken'},
    {name: '佐賀県', prefecture: 'ken'},
    {name: '長崎県', prefecture: 'ken'},
    {name: '熊本県', prefecture: 'ken'},
    {name: '大分県', prefecture: 'ken'},
    {name: '宮崎県', prefecture: 'ken'},
    {name: '鹿児島県', prefecture: 'ken'},
    {name: '沖縄県', prefecture: 'ken'}
  ];
}
export default List1;

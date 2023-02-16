import CommunityDesc from "../../assets/img/temp/community_desc.png";
import CommunityDesc2 from "../../assets/img/temp/community_desc2.png";
import community_detail_desc_img from "../../assets/img/temp/community_detail_desc_img.png";

const feed1 = {
  id: 1,
  img: CommunityDesc.src,
  descImg: [
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
  ],
  categoryName: "전체",
  categoryCode: "all",
  title: "안목해변 가보세요~ 이번 주말에 다녀왔어요",
  desc: "바다가 너무 예뻐요! 노을질 때나 일출때 추천드려요",
  username: "오늘은내가캠핑왕",
  distance: 10,
  like: 32,
  comments: 32,
  userId: 1,
  created: "2023.01.21",
  location: "제주도, 애월읍",
};
const feed2 = {
  id: 2,
  img: CommunityDesc2.src,
  descImg: [
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
  ],
  categoryName: "요리",
  categoryCode: "cooking",
  title: "역시 캠핑엔 고기랑 꼬치죠~!!",
  desc: "제가 최근에 구매한 것들중에 제일 꿀템같아요!! 같이 써봤으면 좋겠어서 내용 공유합니다. 밑에 산 정보 뿌려요!!",
  username: "요리왕비룡",
  distance: 22,
  like: 22,
  comments: 11,
  userId: 2,
  created: "2023.01.23",
  location: "강원도, 대관령",
};
const feed3 = {
  id: 3,
  img: CommunityDesc.src,
  descImg: [
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
  ],
  categoryName: "전체",
  categoryCode: "all",
  title: "안목해변 가보세요~ 이번 주말에 다녀왔어요",
  desc: "바다가 너무 예뻐요! 노을질 때나 일출때 추천드려요",
  username: "오늘은내가캠핑왕",
  distance: 10,
  like: 90,
  comments: 4,
  userId: 1,
  created: "2023.01.25",
  location: "양떼목장, 대관령, 강원도",
};
const feed4 = {
  id: 4,
  img: CommunityDesc2.src,
  descImg: [
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
  ],
  categoryName: "장소",
  categoryCode: "place",
  title: "역시 캠핑엔 고기랑 꼬치죠~!!",
  desc: "제가 최근에 구매한 것들중에 제일 꿀템같아요!! 같이 써봤으면 좋겠어서 내용 공유합니다. 밑에 산 정보 뿌려요!!",
  username: "요리왕비룡",
  distance: 66,
  like: 1,
  comments: 3,
  userId: 3,
  created: "2023.01.27",
  location: "경주, 불국사",
};
const feed5 = {
  id: 5,
  img: CommunityDesc2.src,
  descImg: [
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
  ],
  categoryName: "장비",
  categoryCode: "equipment",
  title: "제일가까운곳!!!",
  desc: "정렬시 제일가까운곳입니다!!",
  username: "집돌이",
  distance: 1,
  like: 23,
  comments: 99,
  userId: 4,
  created: "2023.02.02",
  location: "서울, 난지도, 난지캠핑장",
};
const feed6 = {
  id: 6,
  img: CommunityDesc2.src,
  descImg: [
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
    community_detail_desc_img.src,
  ],
  categoryName: "장소",
  categoryCode: "place",
  title: "공감이 제일많은 글이에요!!",
  desc: "공감이 제일많습니다!!",
  username: "공감능력최상",
  distance: 99,
  like: 687,
  comments: 99,
  userId: 1,
  created: "2023.02.08",
  location: "경기도, 파주, 헤이리마을",
};

const feedCommentList = [
  {
    id: 1,
    userId: 1,
    feedId: 1,
    username: "공감능력최상",
    desc: "제 글에 제가 댓글달아요",
    created: "2023.01.21",
  },
  {
    id: 2,
    userId: 3,
    feedId: 1,
    username: "부럽다119",
    desc: "공감이 제일 많은글이 되었네요.",
    created: "2023.01.21",
  },
  {
    id: 3,
    userId: 1,
    feedId: 1,
    username: "공감능력최상",
    desc: "여러분 덕분입니다 감사합니다",
    created: "2023.01.21",
  },
  {
    id: 4,
    userId: 5,
    feedId: 1,
    username: "사진찍자",
    desc: "사진예쁘네요",
    created: "2023.01.21",
  },
  {
    id: 5,
    userId: 6,
    feedId: 1,
    username: "핑크돼지",
    desc: "저기서 소세지 구워먹고싶어요",
    created: "2023.01.21",
  },

  {
    id: 6,
    userId: 1,
    feedId: 2,
    username: "공감능력최상",
    desc: "공감합니다",
    created: "2023.01.21",
  },
  {
    id: 7,
    userId: 3,
    feedId: 2,
    username: "부럽다119",
    desc: "친추요",
    created: "2023.01.21",
  },
  {
    id: 8,
    userId: 1,
    feedId: 2,
    username: "공감능력최상",
    desc: "짱이네요",
    created: "2023.01.21",
  },
  {
    id: 9,
    userId: 5,
    feedId: 2,
    username: "사진찍자",
    desc: "사진예쁘네요",
    created: "2023.01.21",
  },
  {
    id: 10,
    userId: 6,
    feedId: 2,
    username: "핑크돼지",
    desc: "저기서 소세지 구워먹고싶어요",
    created: "2023.01.21",
  },

  {
    id: 11,
    userId: 1,
    feedId: 3,
    username: "공감능력최상",
    desc: "제 글에 제가 댓글달아요",
    created: "2023.01.21",
  },
  {
    id: 12,
    userId: 3,
    feedId: 3,
    username: "부럽다119",
    desc: "공감이 제일 많은글이 되었네요.",
    created: "2023.01.21",
  },
  {
    id: 13,
    userId: 1,
    feedId: 3,
    username: "공감능력최상",
    desc: "여러분 덕분입니다 감사합니다",
    created: "2023.01.21",
  },
  {
    id: 14,
    userId: 5,
    feedId: 3,
    username: "사진찍자",
    desc: "사진예쁘네요",
    created: "2023.01.21",
  },
  {
    id: 15,
    userId: 6,
    feedId: 3,
    username: "핑크돼지",
    desc: "저기서 소세지 구워먹고싶어요",
    created: "2023.01.21",
  },

  {
    id: 16,
    userId: 1,
    feedId: 4,
    username: "공감능력최상",
    desc: "공감 드세요",
    created: "2023.01.21",
  },
  {
    id: 17,
    userId: 3,
    feedId: 4,
    username: "요리왕비룡",
    desc: "비룡이 되서 승천하자",
    created: "2023.01.21",
  },
  {
    id: 18,
    userId: 1,
    feedId: 4,
    username: "공감능력최상",
    desc: "공감합니다",
    created: "2023.01.21",
  },
  {
    id: 19,
    userId: 5,
    feedId: 4,
    username: "사진찍자",
    desc: "사진예쁘네요",
    created: "2023.01.21",
  },
  {
    id: 20,
    userId: 6,
    feedId: 4,
    username: "핑크돼지",
    desc: "저기서 소세지 구워먹고싶어요",
    created: "2023.01.21",
  },

  {
    id: 21,
    userId: 1,
    feedId: 5,
    username: "공감능력최상",
    desc: "짱이다짱",
    created: "2023.01.21",
  },
  {
    id: 22,
    userId: 3,
    feedId: 5,
    username: "부럽다119",
    desc: "부럽다아아",
    created: "2023.01.21",
  },
  {
    id: 23,
    userId: 1,
    feedId: 5,
    username: "공감능력최상",
    desc: "놀러가자",
    created: "2023.01.21",
  },
  {
    id: 24,
    userId: 5,
    feedId: 5,
    username: "사진찍자",
    desc: "사진예쁘네요",
    created: "2023.01.21",
  },
  {
    id: 25,
    userId: 5,
    feedId: 5,
    username: "핑크돼지",
    desc: "저기서 소세지 구워먹고싶어요",
    created: "2023.01.21",
  },
  {
    id: 26,
    userId: 1,
    feedId: 6,
    username: "공감능력최상",
    desc: "제 글에 제가 댓글달아요",
    created: "2023.01.21",
  },
  {
    id: 27,
    userId: 3,
    feedId: 6,
    username: "부럽다119",
    desc: "공감이 제일 많은글이 되었네요.",
    created: "2023.01.21",
  },
  {
    id: 28,
    userId: 1,
    feedId: 6,
    username: "공감능력최상",
    desc: "여러분 덕분입니다 감사합니다",
    created: "2023.01.21",
  },
  {
    id: 29,
    userId: 5,
    feedId: 6,
    username: "사진찍자",
    desc: "사진예쁘네요",
    created: "2023.01.21",
  },
  {
    id: 30,
    userId: 5,
    feedId: 6,
    username: "핑크돼지",
    desc: "저기서 소세지 구워먹고싶어요",
    created: "2023.01.21",
  },
];

export const mockCommunityList = [feed1, feed2, feed3, feed4, feed5, feed6];
export const mockCommunityCommentList = feedCommentList;

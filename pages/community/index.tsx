import React, { FC, useEffect, useState } from "react";

import Layout from "@layout/Layout";
import Grid from "@mui/material/Grid";

import CommunityDesc from "../../assets/img/temp/community_desc.png";
import CommunityUser from "../../assets/img/temp/community_user_icon.png";
import CommunityComments from "../../assets/img/temp/community_comments.png";
import CommunityLike from "../../assets/img/temp/community_like.png";

//임시상품
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";
import { getList } from "../../actions/community";
import { useDispatch, useSelector } from "react-redux";
import communitySlice from "@reducers/community";
import CustomLink from "@cp/common/CustomLink";

const CommunityHeaderGrid = styled(Grid)`
  img {
    width: 100%;
  }
  .grid-category-button {
    padding: 16px;
    text-align: center;
    button {
      height: 40px;
      width: 60px;
      border: 1px solid #e9e9e9;
      border-radius: 120px;
      font-size: 16px;
      line-height: 24px;
      color: #919191;
    }
    .selected_category {
      border: 1px solid #5bbd6b;
      color: white;
      background-color: #5bbd6b;
    }
    .box-sort {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      margin-top: 20px;
      float: right;
      font-style: normal;
      color: #919191;
      .like {
        cursor: pointer;
        margin-right: 5px;
      }
      .near {
        cursor: pointer;
        margin-left: 5px;
      }
      .selected_sort {
        color: #222222;
      }
    }
  }
`;

const CommunityDescGrid = styled(Grid)`
  padding: 19px;
  .grid-desc-category {
    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: #5bbd6b;
    }
  }
  .grid-desc-title {
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #222222;
    }
  }
  .grid-desc-detail {
    margin-top: 16px;
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #4e4e4e;
    }
  }
  .grid-desc-img {
    margin-top: 14px;
    text-align: center;
  }
  .grid-desc-user-img {
    display: flex;
    margin-top: 14px;
    img {
      margin-right: 10px;
    }
  }
  .grid-desc-like {
    img {
      margin-right: 7px;
    }
    div {
      display: flex;
      float: right;
    }
    color: #919191;
    margin-top: 14px;
  }
  .grid-desc-comment {
    img {
      margin-right: 7px;
    }
    div {
      display: flex;
      float: right;
    }
    color: #919191;
    margin-top: 14px;
  }
`;

type Community = {
  id: number;
  img: string;
  categoryName: string;
  categoryCode: string;
  title: string;
  desc: string;
  username: string;
  distance: number;
  like: number;
  comments: number;
};

const Shop: FC = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("like");

  const [communityList, setCommunityList] = useState<Community[]>([]);

  const communityReqData: any = {
    page: 0,
    size: 10,
    sort: "like",
    category: "all",
  };

  const stateCommunityList: Community[] = useSelector(
    (state: any) => state.community.communityList
  );

  const getListDone: Boolean = useSelector(
    (state: any) => state.community.getListDone
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(getList(communityReqData));
  }, []);

  const handleClickSort = (selectedSort: string) => {
    setSelectedSort(selectedSort);
    communityReqData.category = selectedCategory;
    communityReqData.sort = selectedSort;
    // @ts-ignore
    dispatch(getList(communityReqData));
  };

  const handleClickCategory = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
    communityReqData.sort = selectedSort;
    communityReqData.category = selectedCategory;
    // @ts-ignore
    dispatch(getList(communityReqData));
  };

  useEffect(() => {
    setCommunityList(stateCommunityList);
    if (getListDone) {
      dispatch(communitySlice.actions.resetGetListDone());
    }
  }, [getListDone]);

  return (
    <Layout>
      <CommunityHeaderGrid container>
        <Grid item container xs={12} className={"grid-category-button"}>
          <Grid item xs={1.5}>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleClickCategory("all")
              }
              className={selectedCategory === "all" ? "selected_category" : ""}
            >
              전체
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleClickCategory("equipment")
              }
              className={
                selectedCategory === "equipment" ? "selected_category" : ""
              }
            >
              장비
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleClickCategory("cooking")
              }
              className={
                selectedCategory === "cooking" ? "selected_category" : ""
              }
            >
              요리
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleClickCategory("place")
              }
              className={
                selectedCategory === "place" ? "selected_category" : ""
              }
            >
              장소
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Box className={"box-sort"}>
              <Box
                className={
                  selectedSort === "like" ? "selected_sort like" : "like"
                }
                onClick={(e) => handleClickSort("like")}
              >
                공감순
              </Box>
              |
              <Box
                className={
                  selectedSort === "near" ? "selected_sort near" : "near"
                }
                onClick={(e) => handleClickSort("near")}
              >
                가까운순
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CommunityHeaderGrid>
      <Divider sx={{ borderWidth: "1px" }} />
      {communityList.map((community: Community) => {
        return (
          <Box key={community.id}>
            <CommunityDescGrid container>
              <Grid item xs={1} className={"grid-desc-category"}>
                <CustomLink href={"/community/" + community.id}>
                  <Typography>{community.categoryName}</Typography>
                </CustomLink>
              </Grid>
              <Grid item xs={11} className={"grid-desc-title"}>
                <CustomLink href={"/community/" + community.id}>
                  <Typography>{community.title}</Typography>
                </CustomLink>
              </Grid>
              <Grid item xs={12} className={"grid-desc-detail"}>
                <CustomLink href={"/community/" + community.id}>
                  <Typography>{community.desc}</Typography>
                </CustomLink>
              </Grid>
              <Grid item xs={12} className={"grid-desc-img"}>
                <CustomLink href={"/community/" + community.id}>
                  <img src={community.img} />
                </CustomLink>
              </Grid>
              <Grid item xs={9} className={"grid-desc-user-img"}>
                <CustomLink href={"/community/" + community.id}>
                  <img src={CommunityUser.src} />
                </CustomLink>
                <Typography>{community.username}</Typography>
              </Grid>
              <Grid item xs={1.5} className={"grid-desc-like"}>
                <Box>
                  <img src={CommunityLike.src} />{" "}
                  <Typography>{community.like}</Typography>
                </Box>
              </Grid>
              <Grid item xs={1.5} className={"grid-desc-comment"}>
                <Box>
                  <img src={CommunityComments.src} />{" "}
                  <Typography>{community.comments}</Typography>
                </Box>
              </Grid>
            </CommunityDescGrid>
            <Divider sx={{ borderWidth: "3px" }} />
          </Box>
        );
      })}
    </Layout>
  );
};

export default Shop;

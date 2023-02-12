import React, { FC, useEffect } from "react";

import Layout from "@layout/Layout";
import authSlice from "../reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import BaseButton from "@cp/common/BaseButton";
import { getInfo } from "../actions/account";
import Grid from "@mui/material/Grid";

import { BannerSwiper } from "@cp/product/BannerSwiper";
import { ProductSwiperComponent } from "@cp/product/ProductSwiperComponent";
import { getList } from "../actions/banner";
import { AppDispatch } from "../store/configureStore";
import { Category } from "../type/shop/shop";

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const bannerList: Category[] = useSelector(
    (state: any) => state.banner.bannerList
  );

  useEffect(() => {
    dispatch(getList());
  }, []);

  const { loginDone } = useSelector((state: any) => state.auth);

  const logoutAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(authSlice.actions.logout());
  };

  const handleGetInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    //dispatch(getInfo());
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <BannerSwiper bannerList={bannerList} />
        </Grid>
        <ProductSwiperComponent
          title={"캠퍼들의 워너비 Top 10"}
          link={"/shop/top"}
        />
      </Grid>
      <br />
    </Layout>
  );
};

export default App;

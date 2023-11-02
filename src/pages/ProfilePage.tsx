import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { color } from "../assets/styles/color";

import { useRecoilValue } from "recoil";
import { userArrayState } from "../assets/recoil/recoil";

//img
import back from "../assets/images/back.svg";
import link from "../assets/images/link.svg";

//bar
import bars from "../assets/images/bars.svg";
import status from "../assets/images/status.svg";

function ProfilePage() {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const userArray = useRecoilValue(userArrayState);
  const userInfo = userArray.find(
    (user) => user.id === parseInt(user_id || "0", 10)
  );

  return (
    <Container>
      <StatusBar src={status} />
      <img src={back} className="back" onClick={() => navigate(-1)} />
      <UserInfo>
        <Profile src={userInfo?.profileImage} />
        <span className="username">{userInfo?.userName}</span>
        <span className="usermail">yeomhyein123@naver.com</span>
      </UserInfo>
      <LinkContainer>
        <span className="link-title">다른 사람이 나와 소통할 수 있는 방법</span>
        <LinkItem>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img className="link-icon" />
            <span>instagram 1</span>
          </div>
          <img src={link} />
        </LinkItem>
      </LinkContainer>
      <Bar src={bars} />
    </Container>
  );
}

export default ProfilePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  padding-left: 12px;

  .back {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 16px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid ${color.grey1};

  .username {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }

  .usermail {
    color: ${color.grey3};
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 130%;

    margin: 4px 0 24px;
  }
`;

const Profile = styled.img`
  display: flex;
  width: 160px;
  height: 160px;
  margin: 16px;
  border-radius: 50%;
  border: 1px solid ${color.grey2};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const LinkContainer = styled.div`
  margin-top: 24px;

  .link-title {
    color: ${color.grey3};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
  }
`;

const LinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-right: 6px;

  .link-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
`;

const StatusBar = styled.img`
  width: 375px;
  height: 44px;
`;

const Bar = styled.img`
  width: 375px;
  height: 34px;
`;

import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../orgabusum/user/UserCard";

export const Users = () => {
  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      name: `光岡${val}`,
      image: "https://source.unsplash.com/NE0XGVKTmcA",
      email: "mitutumi02102@gmail.com",
      phone: "090-1422-6721",
      company: {
        name: "株式会社テスト"
      },
      website: "https//google.com"
    };
  });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

import React from 'react';
import { Avatar, Card, Badge, Typography } from 'antd';
import { Profile, Repo } from '@types';
import { getColorByName } from '@config';
import GithubCardHeader from './GithubCardHeader';
import GithubCardContent from './GithubCardContent';
import GithubRepoCard from './GithubRepoCard';

interface Props {
  profile: Profile;
  repos: Repo[];
  email: string;
}

const GithubCard = ({ profile, repos, email }: Props): JSX.Element => {
  if (profile && repos) {
    return (
      <Badge.Ribbon
        text={profile.username}
        color={getColorByName(profile.username)}
      >
        <Card hoverable title={<GithubCardHeader profile={profile} />}>
          <Card.Meta
            avatar={<Avatar src={profile.avatar} />}
            title={<GithubCardContent profile={profile} />}
            description={`Joined in ${profile.createDate}`}
          />
          {repos.map((repo, index) => (
            <GithubRepoCard key={index} repo={repo} />
          ))}
        </Card>
      </Badge.Ribbon>
    );
  }

  return (
    <div className="mx-auto my-0 text-center">
      <Typography.Title>
        Please mail to <a href={`mailto:${email}`}>me</a>.
      </Typography.Title>
    </div>
  );
};

export default GithubCard;

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewTweet:undefined;
  Fleet:undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Messages: undefined;
  Search: undefined;
  Notifications: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type UserType={
    id:string,
    userName:string,
    name:string,
    image?:string
}

  export type TweetType={
id:string,
user:UserType,
createdAt:string,
content:string,
image?:string,
NofComments?:number,
NofRetwwet?:number,
NofLikes?:number
}
export type FleetType={

}

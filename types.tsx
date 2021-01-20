export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewTweet:undefined;
  Fleet:undefined;
  UserDm:undefined;
};
export type SearchNavigationParamList={
  SearchScreen:undefined;
}

export type TopTabParamList = {
  All: undefined;
  Mention: undefined;
};
export type BottomTabParamList = {
  Home: undefined;
  Messages: undefined;
  Search: undefined;
  Notifications: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
  TweetContent: undefined;
  
};


export type NotificationParamList = {
  NotificationScreen: undefined;
  
};
export type MessageNavigationParamList = {
  MessageScreen: undefined;

}
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

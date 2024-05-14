import React from "react";

const commentsData = [
  {
    name: "hritu",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "hritu",
        text: "lorem ipsum dolor sit amet",
        replies: [
          {
            name: "hritu",
            text: "lorem ipsum dolor sit amet",
            replies: [],
          },
          {
            name: "hritu",
            text: "lorem ipsum dolor sit amet",
            replies: [
              {
                name: "hritu",
                text: "lorem ipsum dolor sit amet",
                replies: [],
              },
            ],
          },
          {
            name: "hritu",
            text: "lorem ipsum dolor sit amet",
            replies: [],
          },
        ],
      },
      {
        name: "hritu",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "hritu",
    text: "lorem ipsum dolor sit amet",
    replies: [
      {
        name: "hritu",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "hritu",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "hritu",
        text: "lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "hritu",
    text: "lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "hritu",
    text: "lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "hritu",
    text: "lorem ipsum dolor sit amet",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 p-2 rounded-sm my-2">
      <img
        className="w-8 h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjbj7AZNfVt3_gVuHmiHHPitiZjhMaqPJWNTzAyZmtw&s"
        alt="user logo"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  // dont use indexes as keys
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

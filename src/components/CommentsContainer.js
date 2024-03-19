import React from "react";

const commentsData = [
  {
    name: "Chandan",
    text: "This is a comments feature with nested comments",
    replies: [],
  },
  {
    name: "chandan Allimilli",
    text: "inspired by Reddit",
    replies: [
      {
        name: "chandan",
        text: "supports unlimited nesting",
        replies: [],
      },
      {
        name: "chandan Allimilli",
        text: "This is a comments feature with nested comments, inspired by Reddit, and it supports unlimited nesting",
        replies: [
          {
            replies: [
              {
                name: "chandan Allimilli",
                text: "This is a comments feature with nested comments, inspired by Reddit, and it supports unlimited nesting",
                replies: [
                  {
                    name: "chandan Allimilli",
                    text: "This is a comments feature with nested comments, inspired by Reddit, and it supports unlimited nesting",
                  },
                  {
                    name: "chandan Allimilli",
                    text: "This is a comments feature with nested comments, inspired by Reddit, and it supports unlimited nesting",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "chandan Allimilli",
    text: "This is a comments feature with nested comments, inspired by Reddit, and it supports unlimited nesting",
    replies: [],
  },

  {
    name: "chandan",
    text: "This is a comments feature with nested comments, inspired by Reddit, and it supports unlimited nesting",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-[#1d2e2b] p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Check if comments array is defined and not empty
  if (!comments || comments.length === 0) {
    return null; // or you can return a message indicating no comments
  }

  // Render each comment and its replies
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* Check if comment has replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border border-[#2e5233] bg-[#1d2e2b] ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 bg-[#1d2e2b]">
      <h1 className="text-xl font-bold text-[#2c572c]">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

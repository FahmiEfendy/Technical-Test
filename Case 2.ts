// 5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};
const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

let count = 0;

const commentCounter = function (target: any) {
  for (let i in target) {
    if (typeof target[i] === "object") {
      commentCounter(target[i]);
    } else if (typeof target[i] === "number") {
      count++;
    }
  }
  return count;
};

console.log(commentCounter(comments));

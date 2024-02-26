const voteSystem = {
  emoji: (vote) => {
    switch (vote) {
      case "1":
        return (
          <span className="rounded-full p-1 px-3 bg-red-50 font-semibold text-red-500">
            Dislike
          </span>
        );

      case "2":
        return (
          <span className="rounded-full p-1 px-3 bg-orange-50 font-semibold text-orange-500">
            Poor
          </span>
        );

      case "3":
        return (
          <span className="rounded-full p-1 px-3 bg-purple-50 font-semibold text-purple-500">
            Okay
          </span>
        );

      case "4":
        return (
          <span className="rounded-full p-1 px-3 bg-cyan-50 font-semibold text-cyan-500">
            Good
          </span>
        );

      case "5":
        return (
          <span className="rounded-full p-1 px-3 bg-green-50 font-semibold text-green-500">
            Perfect
          </span>
        );

      default:
        return (
          <span className="rounded-full p-1 px-3 bg-slate-50 font-semibold text-slate-500">
            Neutral
          </span>
        );
    }
  },
  rating: (vote) => {
    switch (vote) {
      case "1":
        return (
          <span className="rounded-full p-1 px-3 bg-red-50 font-semibold text-red-500">
            Dislike
          </span>
        );

      case "2":
        return (
          <span className="rounded-full p-1 px-3 bg-orange-50 font-semibold text-orange-500">
            Poor
          </span>
        );

      case "3":
        return (
          <span className="rounded-full p-1 px-3 bg-purple-50 font-semibold text-purple-500">
            Okay
          </span>
        );

      case "4":
        return (
          <span className="rounded-full p-1 px-3 bg-cyan-50 font-semibold text-cyan-500">
            Good
          </span>
        );

      case "5":
        return (
          <span className="rounded-full p-1 px-3 bg-green-50 font-semibold text-green-500">
            Perfect
          </span>
        );

      default:
        return (
          <span className="rounded-full p-1 px-3 bg-slate-50 font-semibold text-slate-500">
            Neutral
          </span>
        );
    }
  },
  vote: (vote) => {
    switch (vote) {
      case "1":
        return (
          <span className="rounded-full p-1 px-3 bg-red-50 font-semibold text-red-500">
            Dislike
          </span>
        );

      case "2":
        return (
          <span className="rounded-full p-1 px-3 bg-green-50 font-semibold text-green-500">
            Like
          </span>
        );

      default:
        return (
          <span className="rounded-full p-1 px-3 bg-slate-50 font-semibold text-slate-500">
            Neutral
          </span>
        );
    }
  },
};

export default voteSystem;

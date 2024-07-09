let videos = {
  title: "First Video",
  rating: 5,
  comments: 2,
  createdAt: "2 minutes ago",
  vides: 59,
  id: 1,
}

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id-1];

  return res.render("watch", {pageTitle: `Watch ${video.title}`});
}
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");

import MenuBar from "./MenuBar";
import MessageBar from "./MessageBar";

const CreatePostPage = () => {
  ...
};
<MenuBar />
<MessageBar />
import UploadImageSection from "./UploadImageSection";

const CreatePostPage = () => {
  ...
  return (
    <div className="create-post-page">
      ...
      <UploadImageSection />
      ...
    </div>
  );
};
const CreatePostPage = () => {
  const [caption, setCaption] = React.useState("");
  const [filters, setFilters] = React.useState("");
  const [tags, setTags] = React.useState("");

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleFiltersChange = (event) => {
    setFilters(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  ...
};
<input
  type="text"
  placeholder="Caption"
  value={caption}
  onChange={handleCaptionChange}
/>
<input
  type="text"
  placeholder="Filters"
  value={filters}
  onChange={handleFiltersChange}
/>
<input
  type="text"
  placeholder="Tags"
  value={tags}
  onChange={handleTagsChange}
/>

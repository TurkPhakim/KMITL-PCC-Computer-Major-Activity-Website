// Define the data structure for a post
export interface Post {
  id: string;             // Post ID
  title: string;          // Post Title
  coverImage: string;     // Post cover image URL
  description: string;    // Description -> Post details
  location: string;       // location
  lecturer: string;       // lecturer
  category: string;       // "News" or "Event"
  date: string;           // Post date
  externalLink?: string;  // External Link
  images?: string[];      // Array Picture
}
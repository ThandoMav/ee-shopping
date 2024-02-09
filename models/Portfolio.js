import mongoose from "mongoose";
import domPurifier from 'dompurify';
import { JSDOM } from 'jsdom';
import slug from 'mongoose-slug-generator';
const htmlPurify = domPurifier(new JSDOM().window);

//initialize slug
mongoose.plugin(slug);

const portfolioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true, slug_padding_size: 2 },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

portfolioSchema.pre('validate', function(next) {
  //check if there is a description
  if (this.description) {
      this.description = htmlPurify.sanitize(this.description);
  }

  next();
});

const Portfolio =
  mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;

import mongoose from "mongoose";
import domPurifier from 'dompurify';
import { JSDOM } from 'jsdom';
import slug from 'mongoose-slug-generator';
const htmlPurify = domPurifier(new JSDOM().window);

//initialize slug
mongoose.plugin(slug);

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true, slug_padding_size: 2 },
    category: { type: String, required: true },
    offer: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

serviceSchema.pre('validate', function(next) {
  //check if there is a description
  if (this.description) {
      this.description = htmlPurify.sanitize(this.description);
  }

  next();
});

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;

import { AspectRatio } from "./ui/aspect-ratio";

export function BookNow() {
  return (
    <section id="book-now" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Consultation or Studio Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a free consultation, book our professional studio, or arrange for us to come to you.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <AspectRatio ratio={4 / 3}>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=c_e92fef62c03eceffc32181bd22991ae0fb26a8dfee43f518eee09ed07b8ce1f5%40group.calendar.google.com&ctz=Australia%2FBrisbane"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}

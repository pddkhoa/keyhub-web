import { Button } from "@/components/ui/button";
import { Image, View } from "lucide-react";

export const DetailBlog = () => {
  return (
    <div>
      <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-background dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto ">
            <div className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <div className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-title ">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-title "
                      >
                        Jese Leos
                      </a>
                      <p className="text-base text-title-foreground ">
                        Graphic Designer, educator &amp; CEO Flowbite
                      </p>
                      <p className="text-base text-title-foreground ">
                        <time dateTime="2022-02-08" title="February 8th, 2022">
                          Feb. 8, 2022
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-title">
                  Best practices for successful prototypes
                </h1>
              </div>
              <p className="lead text-title-foreground ">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, datepickers.
              </p>
              <p className="text-title-foreground ">
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
              <p className="text-title-foreground ">
                But then I found a{" "}
                <a href="https://flowbite.com">
                  component library based on Tailwind CSS called Flowbite
                </a>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more which
                are conveniently built with the utility classes from Tailwind
                CSS.
              </p>
              <div>
                <img
                  src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                  className="w-full "
                />
                <figcaption>Digital art by Anonymous</figcaption>
              </div>
              <h2 className="text-title-foreground">
                Getting started with Flowbite
              </h2>
              <p className="text-title-foreground ">
                First of all you need to understand how Flowbite works. This
                library is not another framework. Rather, it is a set of
                components based on Tailwind CSS that you can just copy-paste
                from the documentation.
              </p>
              <p className="text-title-foreground ">
                It also includes a JavaScript file that enables interactive
                components, such as modals, dropdowns, and datepickers which you
                can optionally include into your project via CDN or NPM.
              </p>
              <p className="text-title-foreground ">
                You can check out the{" "}
                <a href="https://flowbite.com/docs/getting-started/quickstart/">
                  quickstart guide
                </a>{" "}
                to explore the elements by including the CDN files into your
                project. But if you want to build a project with Flowbite I
                recommend you to follow the build tools steps so that you can
                purge and minify the generated CSS.
              </p>
              <p className="text-title-foreground">
                You'll also receive a lot of useful application UI, marketing
                UI, and e-commerce pages that can help you get started with your
                projects even faster. You can check out this{" "}
                <a href="https://flowbite.com/docs/components/tables/">
                  comparison table
                </a>{" "}
                to better understand the differences between the open-source and
                pro version of Flowbite.
              </p>
              <h2 className="text-title-foreground">
                When does design come in handy?
              </h2>
              <p className="text-title-foreground">
                While it might seem like extra work at a first glance, here are
                some key moments in which prototyping will come in handy:
              </p>

              <p className="text-title-foreground">
                A typeface is a collection of letters. While each letter is
                unique, certain shapes are shared across letters. A typeface
                represents shared patterns across a collection of letters.
              </p>
              <h3 className="text-title-foreground">Type classification</h3>
              <h4 className="text-title-foreground">Serif</h4>
              <p className="text-title-foreground">
                A serif is a small shape or projection that appears at the
                beginning or end of a stroke on a letter. Typefaces with serifs
                are called serif typefaces. Serif fonts are classified as one of
                the following:
              </p>

              <p className="text-title-foreground">
                A serif is a small shape or projection that appears at the
                beginning or end of a stroke on a letter. Typefaces with serifs
                are called serif typefaces. Serif fonts are classified as one of
                the following:
              </p>

              <h3 className="text-title-foreground">
                Best practices for setting up your prototype
              </h3>
              <p className="text-title-foreground">
                <strong>Low fidelity or high fidelity?</strong> Fidelity refers
                to how close a prototype will be to the real deal. If you’re
                simply preparing a quick visual aid for a presentation, a
                low-fidelity prototype — like a wireframe with placeholder
                images and some basic text — would be more than enough. But if
                you’re going for more intricate usability testing, a
                high-fidelity prototype — with on-brand colors, fonts and
                imagery — could help get more pointed results.
              </p>
              <p className="text-title-foreground">
                <strong>Consider your user</strong>. To create an intuitive user
                flow, try to think as your user would when interacting with your
                product. While you can fine-tune this during beta testing,
                considering your user’s needs and habits early on will save you
                time by setting you on the right path.
              </p>
              <p className="text-title-foreground">
                <strong>Start from the inside out</strong>. A nice way to both
                organize your tasks and create more user-friendly prototypes is
                by building your prototypes ‘inside out’. Start by focusing on
                what will be important to your user, like a Buy now button or an
                image gallery, and list each element by order of priority. This
                way, you’ll be able to create a prototype that puts your users’
                needs at the heart of your design.
              </p>
              <p className="text-title-foreground">
                And there you have it! Everything you need to design and share
                prototypes — right in Flowbite Figma.
              </p>
              <div className="border-t-2 w-full mt-10 p-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3 text-title-foreground">
                    <span>Category:</span>
                    <span>Bong da</span>
                  </div>
                  <div className="flex items-center space-x-3 text-title-foreground">
                    <span>Tags:</span>
                    <div className="flex gap-3">
                      <div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          Default
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          Default
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          Default
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          Default
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          Default
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full space-y-3 mt-5">
                  <div className="flex items-center space-x-3 text-xl text-title">
                    Comments
                  </div>
                  <div className="relative flex flex-col bg-card rounded-xl">
                    <div className="flex flex-col h-fit">
                      <div className="flex flex-row w-full p-3">
                        <img
                          className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                          alt="Noob master's avatar"
                          src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                        />
                        <span className="flex relative flex-1 p-3">
                          <textarea
                            className="flex flex-1 bg-transparent outline-none rounded-lg text-title-foreground p-2"
                            rows={3}
                          ></textarea>
                        </span>
                      </div>
                      <div className="flex flex-row gap-3 justify-between items-center p-3 px-4 border-t text-title-foreground">
                        <div className="flex gap-4">
                          <Image className="hover:brightness-110 cursor-pointer" />
                          <View className="hover:brightness-110 cursor-pointer" />
                        </div>
                        <div>
                          <Button>Post Comment</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 p-3">
                    <img
                      className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                      alt="Noob master's avatar"
                      src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                    />
                    <div className="flex-col mt-1">
                      <div className="flex items-center flex-1 px-4 font-bold text-title-foreground leading-tight">
                        Noob master
                        <span className="ml-2 text-xs font-normal text-title-foreground">
                          2 weeks ago
                        </span>
                      </div>
                      <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                        Wow!!! how you did you create this?
                      </div>
                      <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg
                          className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                          viewBox="0 0 95 78"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg
                          className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 ml-16 border-border" />
                  <div className="flex flex-row pt-1 md-10 md:ml-16">
                    <img
                      className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                      alt="Noob master's avatar"
                      src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                    />
                    <div className="flex-col mt-1">
                      <div className="flex items-center flex-1 px-4 font-bold text-title-foreground leading-tight">
                        Noob master
                        <span className="ml-2 text-xs font-normal text-title-foreground">
                          2 weeks ago
                        </span>
                      </div>
                      <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                        Wow!!! how you did you create this?
                      </div>
                      <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg
                          className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                          viewBox="0 0 95 78"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg
                          className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 p-3">
                    <img
                      className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                      alt="Noob master's avatar"
                      src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                    />
                    <div className="flex-col mt-1">
                      <div className="flex items-center flex-1 px-4 font-bold text-title-foreground leading-tight">
                        Noob master
                        <span className="ml-2 text-xs font-normal text-title-foreground">
                          2 weeks ago
                        </span>
                      </div>
                      <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                        Wow!!! how you did you create this?
                      </div>
                      <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg
                          className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                          viewBox="0 0 95 78"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg
                          className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

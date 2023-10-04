import AlphabetAvatar from "@/components/Avatar/avatar";
import { ListCard } from "@/components/Card/CardPorfile/listCard";
import { Slider } from "@/components/Swipers/slideHighlight";
import image from "../../asset/1111.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { SlideVideo } from "@/components/Swipers/slideVideo";

export const Explore = () => {
  return (
    <div className="container  min-h-0 px-9 py-16">
      <div className="w-full h-full grid grid-cols-8">
        <div className="h-full w-full col-span-6 flex flex-col p-5 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden ">
          <div className="w-full space-y-2">
            <h2 className="text-xl text-title">Tin nổi bật</h2>
            <Slider />
          </div>
          <div className="w-full space-y-2">
            <h2 className="text-xl text-title">Video nổi bật</h2>
            <SlideVideo />
          </div>
          <div className="w-full space-y-2">
            <h2 className="text-xl text-title">Các bài viết hay</h2>
            <div className="w-full space-y-2">
              <Tabs defaultValue="cate1">
                <TabsList className="w-full border-b-2 border-border text-title-foreground">
                  <TabsTrigger
                    className="data-[state=active]:border-b-2 py-2.5 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 "
                    value="cate1"
                  >
                    Cate 1
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=active]:border-b-2 py-2.5 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
                    value="cate2"
                  >
                    Cate 2
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="cate1">
                  <div className="h-fit rounded-lg p-4 bg-card">
                    <div className="grid-flow-row w-full space-y-5">
                      <span className="text-title">Cate1</span>
                      <ListCard />
                      <ListCard />
                      <ListCard />
                      <ListCard />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="cate2">
                  <div className="h-fit rounded-lg p-4 bg-card">
                    <div className="grid-flow-row w-full space-y-5">
                      <span className="text-title">Cate2</span>
                      <ListCard />
                      <ListCard />
                      <ListCard />
                      <ListCard />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="h-full w-full col-span-2 flex flex-col p-5 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden">
          <div className="w-full space-y-2">
            <div className="h-fit rounded-lg p-4 mt-9 bg-card">
              <div className="flex flex-col space-y-5">
                <div className="text-title flex justify-between">
                  <span>Thành viên nổi bật</span>
                  <span>See all</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2 hover:bg-hover p-2 rounded-lg cursor-pointer">
                    <AlphabetAvatar size={50} />
                    <div className="flex flex-col">
                      <span className="text-title text-md">
                        Phan Dai Dang Khoa
                      </span>
                      <span className="text-title-foreground text-sm">
                        @pddkhoa
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 hover:bg-hover p-2 rounded-lg cursor-pointer">
                    <AlphabetAvatar size={50} />
                    <div className="flex flex-col">
                      <span className="text-title text-md">
                        Phan Dai Dang Khoa
                      </span>
                      <span className="text-title-foreground text-sm">
                        @pddkhoa
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 hover:bg-hover p-2 rounded-lg cursor-pointer">
                    <AlphabetAvatar size={50} />
                    <div className="flex flex-col">
                      <span className="text-title text-md">
                        Phan Dai Dang Khoa
                      </span>
                      <span className="text-title-foreground text-sm">
                        @pddkhoa
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 hover:bg-hover p-2 rounded-lg cursor-pointer">
                    <AlphabetAvatar size={50} />
                    <div className="flex flex-col">
                      <span className="text-title text-md">
                        Phan Dai Dang Khoa
                      </span>
                      <span className="text-title-foreground text-sm">
                        @pddkhoa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="h-fit rounded-lg p-4 mt-2 bg-card">
              <div className="flex flex-col space-y-5">
                <div className="text-title flex justify-between">
                  <span>Intro/QC</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="w-full overflow-hidden">
                    <a
                      href="#"
                      className="group relative rounded-lg block bg-black"
                    >
                      <img
                        alt="Developer"
                        src={image}
                        className="absolute inset-0 h-full w-full object-cover rounded-lg opacity-75 transition-opacity group-hover:opacity-50"
                      />
                      <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                          Developer
                        </p>
                        <p className="text-xl font-bold text-white sm:text-2xl">
                          PDD KHOA
                        </p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Omnis perferendis hic asperiores
                              quibusdam quidem voluptates doloremque reiciendis
                              nostrum harum. Repudiandae?
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="h-full rounded-lg p-4 mt-2 bg-card">
              <div className="flex flex-col space-y-5">
                <div className="text-title flex justify-between">
                  <span>Danh Muc</span>
                  <span>See all</span>
                </div>
                <div className="flex flex-col space-y-3 h-52 overflow-y-auto">
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import { Input } from "@/components/ui/input";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Budget`,
  description: `${SITE_TITLE} - Job Budget`
};

export default function Budget() {
  return (
    <section className="flex justify-center">
      <div className="w-[80%]">
        <h2 className="mt-[100px] text-[24px] font-[700]">
          Budget type & Rate
        </h2>

        <div className="mt-[24px] flex h-auto w-full flex-col gap-[36px] rounded-md border border-black p-4">
          <div className="flex h-auto flex-col items-center justify-around gap-[48px] rounded-lg p-12 lg:flex-row">
            <div className="w-[300px] rounded-md border border-black py-6 text-center text-[18px] font-[500]">
              Hourly Rate
            </div>

            <div className="flex flex-col gap-[48px]">
              <div className="flex flex-row items-center gap-[36px]">
                <p className="text-[16px] font-[500]">minium:</p>

                <div className="flex flex-row items-center gap-[12px]">
                  <div className="relative flex max-w-[180px]">
                    <Input
                      placeholder="15"
                      className="text-center text-[14px] font-[700] "
                    />

                    <div className="absolute right-[5px] top-[4px]">
                      <TiArrowSortedUp />
                      <TiArrowSortedDown />
                    </div>
                  </div>

                  <span className="text-[14px] font-[400]">$</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-[32px]">
                <p className="text-[16px] font-[500]">maxium:</p>

                <div className="flex flex-row items-center gap-[12px]">
                  <div className="relative flex max-w-[180px]">
                    <Input
                      placeholder="30"
                      className="text-center text-[14px] font-[700] "
                    />

                    <div className="absolute right-[5px] top-[4px]">
                      <TiArrowSortedUp />
                      <TiArrowSortedDown />
                    </div>
                  </div>

                  <span className="text-[14px] font-[400]">$</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-[1px] border-gray-300" />

          <div className="mb-[24px] flex h-auto flex-col items-center justify-around gap-[48px] rounded-lg p-12 lg:flex-row">
            <div className="w-[300px] rounded-md border border-black py-6 text-center text-[18px] font-[500]">
              Project Budget
            </div>

            <div className="flex flex-col gap-[48px]">
              <div className="flex flex-row items-center gap-[36px]">
                <p className="text-[16px] font-[500]">minium:</p>

                <div className="flex flex-row items-center gap-[12px]">
                  <div className="relative flex max-w-[180px]">
                    <Input
                      placeholder="300"
                      className="text-center text-[14px] font-[700] "
                    />

                    <div className="absolute right-[5px] top-[4px]">
                      <TiArrowSortedUp />
                      <TiArrowSortedDown />
                    </div>
                  </div>

                  <span className="text-[14px] font-[400]">$</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-[32px]">
                <p className="text-[16px] font-[500]">maxium:</p>

                <div className="flex flex-row items-center gap-[12px]">
                  <div className="relative flex max-w-[180px]">
                    <Input
                      placeholder="5000"
                      className="text-center text-[14px] font-[700] "
                    />

                    <div className="absolute right-[5px] top-[4px]">
                      <TiArrowSortedUp />
                      <TiArrowSortedDown />
                    </div>
                  </div>

                  <span className="text-[14px] font-[400]">$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

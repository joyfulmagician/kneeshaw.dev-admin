"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  getJobBudgetByType,
  updateJobBudget
} from "@/app/api/JobBudgetService";
import { JOB_BUDGET_TYPE } from "@/utils/constants";
import { toast } from "react-toastify";

export default function JobBudget() {
  const [rateValues, setRateValues] = useState<IJobBudget | null>(null);
  const [fixedValues, setFixedValues] = useState<IJobBudget | null>(null);

  const initialize = async () => {
    const resRate = await getJobBudgetByType({ type: JOB_BUDGET_TYPE.RATE });
    setRateValues(resRate.data.data);

    const resFixed = await getJobBudgetByType({ type: JOB_BUDGET_TYPE.FIXED });
    setFixedValues(resFixed.data.data);
  };

  const handleFieldChange =
    (type: number, field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === JOB_BUDGET_TYPE.RATE) {
        setRateValues((prev: IJobBudget | null) =>
          prev ? { ...prev, [field]: Number(e.target.value) } : null
        );
      }

      if (type === JOB_BUDGET_TYPE.FIXED) {
        setFixedValues((prev: IJobBudget | null) =>
          prev ? { ...prev, [field]: Number(e.target.value) } : null
        );
      }
    };

  const handleSaveClick = async () => {
    try {
      if (rateValues?._id) {
        await updateJobBudget(rateValues?._id, {
          min: rateValues?.min,
          max: rateValues?.max
        });
      }

      if (fixedValues?._id) {
        await updateJobBudget(fixedValues?._id, {
          min: fixedValues?.min,
          max: fixedValues?.max
        });
      }

      toast("Job budgets updated successfully.", { type: "success" });
    } catch (err: any) {
      toast(err.response.data.message, { type: "error" });
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="w-[80%]">
      <div className="mt-[100px] flex flex-row items-center justify-between">
        <h2 className="text-[24px] font-[700]">Budget type & Rate</h2>
        <Button onClick={handleSaveClick}>Save</Button>
      </div>

      <div className="mt-[24px] flex h-auto w-full flex-col gap-[36px] rounded-md border border-black p-4">
        <div className="flex h-auto flex-col items-center justify-around gap-[48px] rounded-lg p-12 lg:flex-row">
          <div className="w-[300px] rounded-md border border-black py-6 text-center text-[18px] font-[500]">
            Hourly Rate
          </div>

          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-row items-center gap-[36px]">
              <p className="text-[16px] font-[500]">minium:</p>

              <div className="flex flex-row items-center gap-[12px]">
                <div className="flex max-w-[180px]">
                  <Input
                    type="number"
                    placeholder="minimum rate"
                    className="text-center text-[14px] font-[700]"
                    value={rateValues?.min ?? 0}
                    onChange={handleFieldChange(JOB_BUDGET_TYPE.RATE, "min")}
                  />
                </div>

                <span className="text-[14px] font-[400]">$</span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-[32px]">
              <p className="text-[16px] font-[500]">maxium:</p>

              <div className="flex flex-row items-center gap-[12px]">
                <div className="flex max-w-[180px]">
                  <Input
                    type="number"
                    placeholder="maximum rate"
                    className="text-center text-[14px] font-[700]"
                    value={rateValues?.max ?? 0}
                    onChange={handleFieldChange(JOB_BUDGET_TYPE.RATE, "max")}
                  />
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
                    type="number"
                    placeholder="minimum fixed budget"
                    className="text-center text-[14px] font-[700]"
                    value={fixedValues?.min ?? 0}
                    onChange={handleFieldChange(JOB_BUDGET_TYPE.FIXED, "min")}
                  />
                </div>

                <span className="text-[14px] font-[400]">$</span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-[32px]">
              <p className="text-[16px] font-[500]">maxium:</p>

              <div className="flex flex-row items-center gap-[12px]">
                <div className="relative flex max-w-[180px]">
                  <Input
                    type="number"
                    placeholder="maximum fixed budget"
                    className="text-center text-[14px] font-[700]"
                    value={fixedValues?.max ?? 0}
                    onChange={handleFieldChange(JOB_BUDGET_TYPE.FIXED, "max")}
                  />
                </div>

                <span className="text-[14px] font-[400]">$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

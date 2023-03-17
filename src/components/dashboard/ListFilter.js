import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";

const ListFilter = ({
  onRadioTimeRangeSelectionHandler,
  radioTimeRangeSelection,
  onRadioIfPurchasedSelectionHandler,
  radioIfPurchasedSelection,
}) => {
  return (
    <div>
      <form className="w-full bg-shade fixed top-20 right-0 flex flex-row-reverse gap-2 items-center justify-center font-firstFont font-bold text-[10px]">
        <p className="text-vio">
          <CalendarMonthOutlinedIcon />
        </p>
        <span className=" flex flex-row-reverse items-center justify-center gap-1 h-full w-16 p-2">
          <label htmlFor="all" className="cursor-pointer">
            همه
          </label>
          <input
            type="radio"
            name="domain"
            id="all"
            value="all"
            onChange={onRadioTimeRangeSelectionHandler}
            checked={radioTimeRangeSelection === "all"}
            className="cursor-pointer"
          />
        </span>
        <span className=" flex flex-row-reverse gap-1 h-full p-2 ">
          <label htmlFor="week" className="cursor-pointer">
            یک هفته‌ی اخیر
          </label>
          <input
            type="radio"
            name="domain"
            id="week"
            value="last_week"
            onChange={onRadioTimeRangeSelectionHandler}
            checked={radioTimeRangeSelection === "last_week"}
            className="cursor-pointer"
          />
        </span>
        <span className=" flex flex-row-reverse gap-1 h-full p-2">
          <label htmlFor="month" className="cursor-pointer">
            یک ماه اخیر
          </label>
          <input
            type="radio"
            name="domain"
            id="month"
            value="last_month"
            onChange={onRadioTimeRangeSelectionHandler}
            checked={radioTimeRangeSelection === "last_month"}
            className="cursor-pointer"
          />
        </span>
      </form>
      <form className="w-full bg-shade fixed top-28 right-0 flex flex-row-reverse gap-2 items-center justify-center font-firstFont font-bold text-[10px]">
        <p className="text-vio">
          <LocalAtmOutlinedIcon />
        </p>
        <span className=" flex flex-row-reverse items-center justify-center gap-1 h-full w-16 p-2">
          <label
            htmlFor="purchased_or_not_purchased"
            className="cursor-pointer"
          >
            همه
          </label>
          <input
            type="radio"
            name="purchasingDomain"
            id="purchased_or_not_purchased"
            value="purchased_or_not_purchased"
            onChange={onRadioIfPurchasedSelectionHandler}
            checked={
              radioIfPurchasedSelection === "purchased_or_not_purchased"
            }
            className="cursor-pointer"
          />
        </span>
        <span className=" flex flex-row-reverse gap-1 h-full p-2">
          <label htmlFor="only_purchased_ones" className="cursor-pointer">
            فقط خرید کرده
          </label>
          <input
            type="radio"
            name="purchasingDomain"
            id="only_purchased_ones"
            value="only_purchased_ones"
            onChange={onRadioIfPurchasedSelectionHandler}
            checked={radioIfPurchasedSelection === "only_purchased_ones"}
            className="cursor-pointer"
          />
        </span>
      </form>
    </div>
  );
};

export default ListFilter;

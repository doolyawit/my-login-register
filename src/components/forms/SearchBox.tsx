import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const inputSubject = new Subject();

export const SearchBox = () => {
  inputSubject.pipe(debounceTime(500)).subscribe((value) => {
    console.log(value);
  });
  return (
    <div className="mt-2 content-center items-center justify-center gap-2">
      <input
        type="text"
        name=""
        id=""
        className="mb-6 w-28 rounded-full border border-solid border-black bg-white px-2 py-1 text-black placeholder:py-1 placeholder:text-xs placeholder:text-black sm:w-36 md:w-36 lg:w-36 xl:w-40"
        onChange={(e) => {
          const value = e.target.value;
          if (value?.trim()?.length > 0) {
            inputSubject.next(value);
          }
        }}
        placeholder="Search..."
      />
    </div>
  );
};

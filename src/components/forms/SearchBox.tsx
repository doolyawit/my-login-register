import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

const inputSubject = new Subject();

export const SearchBox = () => {
  inputSubject.pipe(debounce(() => timer(5000))).subscribe((value) => {
    console.log(value);
  });
  return (
    <div className="mt-2 content-center items-center justify-center gap-2 ">
      <input
        type="text"
        name=""
        id=""
        className="p  mb-6 w-28 rounded-full border border-solid border-black bg-white text-black placeholder:py-1 placeholder:text-xs placeholder:text-black sm:w-36 md:w-36 lg:w-36 xl:w-36"
        onChange={(e) => {
          const value = e.target.value;
          inputSubject.next(value);
        }}
        placeholder="Search..."
      />
    </div>
  );
};

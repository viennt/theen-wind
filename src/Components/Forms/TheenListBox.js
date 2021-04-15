import React, { PureComponent } from 'react';
import { Listbox } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';

class TheenListBox extends PureComponent {
  render() {
    const { label, value, options, labelKey, valueKey, labelStyles, optionStyles, onChange } = this.props;

    return (
      <Listbox value={value} onChange={onChange}>
        <div className="relative col-span-5 rounded text-left cursor-pointer focus:outline-none text-xs z-10">
          <Listbox.Button className="relative w-full py-1 pl-3 pr-10 text-left bg-white rounded cursor-default border border-solid border-gray-200 sm:text-xs focus:outline-none">
            <span className="block truncate" style={labelStyles}>{label}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options
            className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 sm:text-sm  focus:outline-none"
          >
            {options.map((item, fontIdx) => (
              <Listbox.Option
                key={fontIdx}
                value={valueKey ? item[valueKey] : item}
                className="cursor-default select-none relative py-2 px-4"
              >
                <span className={`block truncate`} style={optionStyles(item)}>
                  {labelKey ? item[labelKey] : item.label}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    );
  }
}

export default TheenListBox

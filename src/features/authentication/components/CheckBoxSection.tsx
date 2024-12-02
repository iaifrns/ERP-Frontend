import { Checkbox } from '@/components/ui/checkbox';
import React from 'react'

interface CheckBoxType {
    label: string;
}

const CheckBoxSection:React.FC<CheckBoxType> = ({label}) => {
  return (
    <div className='flex gap-4 items-center'>
      <Checkbox />
      <p className='font-semibold text-gray-500'>{label}</p>
    </div>
  )
}

export default CheckBoxSection

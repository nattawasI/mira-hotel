'use client'

/** components */
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { FormGroup } from '@/components/ui/FormGroup'
import { Button } from '@/components/ui/Button'

const ContactForm = (): JSX.Element => {
  return (
    <div className="mx-auto w-full max-w-[35rem] bg-white p-1.25 sm:rounded-xl sm:p-[3rem]">
      <form className="flex flex-col gap-y-1.5">
        <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-2">
          <FormGroup>
            <FormGroup.Label isRequired>First name</FormGroup.Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <FormGroup.Label isRequired>Last name</FormGroup.Label>
            <Input />
          </FormGroup>
        </div>
        <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-2">
          <FormGroup>
            <FormGroup.Label isRequired>Email</FormGroup.Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <FormGroup.Label isRequired>Phone number</FormGroup.Label>
            <Input placeholder="090-000-0000" />
          </FormGroup>
        </div>
        <div className="grid grid-cols-1 gap-1.5 lg:grid-cols-2">
          <FormGroup>
            <FormGroup.Label isRequired>Investment amount</FormGroup.Label>
            <Select>
              <Select.Item value="1">Item 1</Select.Item>
              <Select.Item value="2">Item 2</Select.Item>
              <Select.Item value="3">Item 3</Select.Item>
              <Select.Item value="4">Item 4</Select.Item>
              <Select.Item value="5">Item 5</Select.Item>
            </Select>
          </FormGroup>
          <FormGroup>
            <FormGroup.Label isRequired>Preferred location</FormGroup.Label>
            <Select>
              <Select.Item value="1">Item 1</Select.Item>
              <Select.Item value="2">Item 2</Select.Item>
              <Select.Item value="3">Item 3</Select.Item>
              <Select.Item value="4">Item 4</Select.Item>
              <Select.Item value="5">Item 5</Select.Item>
            </Select>
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <FormGroup.Label>Message</FormGroup.Label>
            <Textarea rows={4} />
          </FormGroup>
        </div>
        <Button type="submit" icon="arrow-right" bg="secondary">
          REQUEST INVESTMENT DETAILS
        </Button>
      </form>
    </div>
  )
}

export default ContactForm

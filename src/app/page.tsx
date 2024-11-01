import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
        <div className="mr-4 ml-4">  
          <h1>Giovani</h1>
          <div className="flex flex-center justify-center items-center pb-4 gap-x-1">
            <label htmlFor="terms">Nome:</label> <Input type="text"/>
          </div>
          
          <div className="flex flex-center justify-center items-center gap-x-1">
            <label htmlFor="terms">Nascimento:</label><Input type="number"/>
          </div>
          
          <div className="pt-3"><label htmlFor="terms">Texto:</label></div>
          <Textarea rows={8}/>
          
          
            <div>
              <div className="flex justify-between">
                
                  <RadioGroup defaultValue="comfortable">
                  <label htmlFor="terms">Radio:</label>
                  <div>
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1"></Label>
                  </div>
                  <div>
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2"></Label>
                  </div>
                
                  
                    <Select>
                    <label htmlFor="terms">Select</label>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                            </Select>
                            </RadioGroup>
              </div>
            </div>
          
            
          <div className="flex flex-center justify-center space-x-96 ">
            <Button>Ok</Button>
            <Button>Cancel</Button>
          </div>

        </div>
  );
}

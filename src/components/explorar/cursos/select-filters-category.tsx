import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectFiltersCategory() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Categorias" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="test1">Test 1</SelectItem>
        <SelectItem value="test2">Test 2</SelectItem>
        <SelectItem value="test3">Test 3</SelectItem>
      </SelectContent>
    </Select>
  );
}

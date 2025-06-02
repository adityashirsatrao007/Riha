"use client";

import { useState, useMemo } from 'react';
import { DressCard } from '@/components/DressCard';
import { dresses, dressCategories, type Dress } from '@/lib/data';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Search, FilterX } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function DressesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);

  const filteredDresses = useMemo(() => {
    return dresses.filter((dress) => {
      const matchesSearchTerm = dress.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                dress.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStyle = selectedStyle ? dress.category.style === selectedStyle : true;
      const matchesColor = selectedColor ? dress.category.color === selectedColor : true;
      const matchesFabric = selectedFabric ? dress.category.fabric === selectedFabric : true;
      return matchesSearchTerm && matchesStyle && matchesColor && matchesFabric;
    });
  }, [searchTerm, selectedStyle, selectedColor, selectedFabric]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedStyle(null);
    setSelectedColor(null);
    setSelectedFabric(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Our Collection
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Browse through our exquisite range of Indian wedding dresses.
        </p>
      </header>

      <div className="mb-8 p-6 bg-card rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search dresses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          
          <Select value={selectedStyle || ""} onValueChange={(value) => setSelectedStyle(value === "all" ? null : value)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              {dressCategories.style.map((style) => (
                <SelectItem key={style} value={style}>{style}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedColor || ""} onValueChange={(value) => setSelectedColor(value === "all" ? null : value)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Colors</SelectItem>
              {dressCategories.color.map((color) => (
                <SelectItem key={color} value={color}>{color}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedFabric || ""} onValueChange={(value) => setSelectedFabric(value === "all" ? null : value)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Fabric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fabrics</SelectItem>
              {dressCategories.fabric.map((fabric) => (
                <SelectItem key={fabric} value={fabric}>{fabric}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {(searchTerm || selectedStyle || selectedColor || selectedFabric) && (
           <Button variant="ghost" onClick={resetFilters} className="mt-4 text-accent hover:text-accent/80">
            <FilterX className="mr-2 h-4 w-4" /> Reset Filters
          </Button>
        )}
      </div>
      
      <Separator className="my-8" />

      {filteredDresses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredDresses.map((dress) => (
            <DressCard key={dress.id} dress={dress} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No dresses found matching your criteria.</p>
          <p className="mt-2">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
import { Search, SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react';

export default function Catalog({ searchRef }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }

        // Search
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(query);
          const matchDesc = p.description.toLowerCase().includes(query);
          const matchCat = p.category.toLowerCase().includes(query);
          if (!matchName && !matchDesc && !matchCat) return false;
        }

        // Price
        if (priceRange !== 'all') {
          if (priceRange === '0-500k' && p.price > 500000) return false;
          if (priceRange === '500k-1m' && (p.price < 500000 || p.price > 1000000)) return false;
          if (priceRange === '1m+' && p.price < 1000000) return false;
        }

        // Size
        if (selectedSize !== 'all') {
          if (!p.sizes.includes(selectedSize)) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // Default
      });
  }, [selectedCategory, searchQuery, priceRange, selectedSize, sortBy]);

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery !== '' ||
    priceRange !== 'all' ||
    selectedSize !== 'all' ||
    sortBy !== 'default';

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange('all');
    setSelectedSize('all');
    setSortBy('default');
  };

  return (
    <section id="catalog" className="py-20 bg-velour-50 border-t border-velour-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-velour-gold font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Koleksi Busana Siap Pakai</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-velour-950 tracking-tight mb-4">
            Catalogue Prêt-à-Porter
          </h2>
          <p className="text-sm sm:text-base text-velour-600 font-light leading-relaxed">
            Eksplorasi pilihan mantel wol, blazer velvet berpotongan tailored, dan rajutan kashmir murni yang dirancang untuk siluet yang abadi.
          </p>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="space-y-6 mb-10">
          
          {/* Top Bar: Search Input & Filter Toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-velour-400" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari mantel, blazer, atau busana..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-velour-200 rounded-full text-sm placeholder-velour-400 text-velour-950 focus:outline-none focus:ring-2 focus:ring-velour-950/20 focus:border-velour-950 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-velour-400 hover:text-velour-950"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Drawer Toggle & Active Counter */}
            <div className="flex items-center justify-between w-full md:w-auto gap-3">
              <span className="text-xs text-velour-500 font-medium">
                {filteredProducts.length} Busana Tersedia
              </span>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium border transition-all ${
                  isFilterOpen || hasActiveFilters
                    ? 'bg-velour-950 text-white border-velour-950'
                    : 'bg-white text-velour-800 border-velour-200 hover:border-velour-400'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filter & Urutkan</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-velour-gold" />
                )}
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-velour-950 text-white shadow-md'
                    : 'bg-white text-velour-700 border border-velour-200 hover:bg-velour-100 hover:text-velour-950'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Expandable Filter & Sorting Drawer */}
          {isFilterOpen && (
            <div className="p-6 bg-white rounded-2xl border border-velour-200 shadow-sm animate-fade-in space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Rentang Harga */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-velour-800 mb-2">
                    Rentang Harga
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full p-2.5 bg-velour-50 border border-velour-200 rounded-lg text-xs font-medium text-velour-900 focus:outline-none focus:ring-1 focus:ring-velour-950"
                  >
                    <option value="all">Semua Harga</option>
                    <option value="0-500k">&lt; Rp 500.000</option>
                    <option value="500k-1m">Rp 500.000 - Rp 1.000.000</option>
                    <option value="1m+">&gt; Rp 1.000.000</option>
                  </select>
                </div>

                {/* Ukuran */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-velour-800 mb-2">
                    Ukuran Pakaian
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {['all', 'S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase transition-all ${
                          selectedSize === size
                            ? 'bg-velour-950 text-white'
                            : 'bg-velour-100 text-velour-700 hover:bg-velour-200'
                        }`}
                      >
                        {size === 'all' ? 'Semua' : size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Urutkan Berdasarkan */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-velour-800 mb-2">
                    Urutan Tampilan
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2.5 bg-velour-50 border border-velour-200 rounded-lg text-xs font-medium text-velour-900 focus:outline-none focus:ring-1 focus:ring-velour-950"
                  >
                    <option value="default">Rekomendasi Utama</option>
                    <option value="price-low">Harga: Terendah ke Tertinggi</option>
                    <option value="price-high">Harga: Tertinggi ke Terendah</option>
                    <option value="rating">Ulasan & Rating Tertinggi</option>
                  </select>
                </div>

                {/* Reset Action */}
                <div className="flex items-end">
                  <button
                    onClick={resetAllFilters}
                    disabled={!hasActiveFilters}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all ${
                      hasActiveFilters
                        ? 'bg-velour-100 text-velour-900 hover:bg-velour-200'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Filter</span>
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 px-4 bg-white rounded-2xl border border-dashed border-velour-300">
            <p className="font-serif text-2xl text-velour-900 mb-2">
              Tidak Ada Busana Ditemukan
            </p>
            <p className="text-sm text-velour-500 max-w-md mx-auto mb-6">
              Tidak ada produk yang cocok dengan kombinasi filter atau kata kunci "{searchQuery}".
            </p>
            <button
              onClick={resetAllFilters}
              className="px-6 py-2.5 bg-velour-950 text-white rounded-full text-xs uppercase tracking-wider font-medium hover:bg-velour-800 transition-colors"
            >
              Hapus Semua Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

import { useState, createContext, useContext } from "react"

const ProductContext = createContext()

export function ProductProvider ({children}) {
const [ selectedProduct, setSelectedProduct ] = useState(null)

return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct}}>
        {children}
    </ProductContext.Provider>
)
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
  }
interface SecData {
    image: string;
    title: string;
    price: number;
    discount:number,
        percen:number
}

const secData: SecData[] = [
    {
        image: "/Arrival1.png",
        title: "T-shirt with Tape Details",
        price: 120,
        discount:0,
        percen:0
    },
    {
        image : "/Arrival2.png",
        title : "Skinny Fit Jeans",
        price : 240,
        discount:260,
        percen:20
    },
    {
        image : "/Arrival3.png",
        title : "Checkered Shirt", 
        price : 180,
        discount:0,
        percen:0
    },
    {
        image : "/Arrival4.png",
        title : "Sleeve Stripe T-shirt",
        price : 130,
        discount:160,
        percen:30
    }
]

export { secData} 
export type {SecData}
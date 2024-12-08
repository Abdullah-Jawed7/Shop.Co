interface SecData {
    image: string;
    title: string;
    price: number;
    discount:number,
    percen:number
}

const secData: SecData[] = [
    {
        image: "/top1.png",
        title: "Vertical Striped Shirt ",
        price: 212,
        discount:232,
        percen:20
    },
    {
        image : "/top2.png",
        title : "Courage Graphic T-shirt",
        price : 145,
        discount:0,
        percen:0
    },
    {
        image : "/top3.png",
        title : "Lopse Fit Bermuda Shorts", 
        price : 80,
        discount:0,
        percen:0
    },
    {
        image : "/top4.png",
        title : "Faded Skinny Jeans",
        price : 210,
        discount:0,
        percen:0
    }
]

export { secData} 
export type {SecData}
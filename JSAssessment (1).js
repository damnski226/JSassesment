// create a variable to hold your NFT's
const a = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _eyeColor, _shirtType, _accessories) {
    const NFT = {
        "name":  _name,
        "eyecolor": _eyeColor,
        "shirtType": _shirtType,
        "accessories": _accessories
    }
    a.push (NFT);
    console.log ("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i = 0; i < a.length; i++){
        console.log("\nID \t\t\t\t" + (i + 1));
        console.log("\nName: \t\t\t" + a[i].name);
        console.log("Eye Color: \t\t" + a[i].eyecolor);
        console.log("Shirt Type: \t" + a[i].shirtType);
        console.log("Accessories: \t" + a[i].accessories);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    console.log("\n" + a.length);
}

// call your functions below this line
mintNFT ("Adam", "Black", "Jacket", "Turtle neck");
mintNFT ("Iggy", "Brown", "Sweater", "Silver Chains");
mintNFT ("Alynna", "Pink", "Blzaer", "Diamond Necklace");
mintNFT ("Ysa", "Beige", "Dress", "Gold Necklace");
mintNFT ("Jenevive", "Gray", "Crop Top", "Wig");
listNFTs();
getTotalSupply();
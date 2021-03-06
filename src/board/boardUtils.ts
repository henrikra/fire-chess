export const createPieceImageUrl = (piece: string, color: string) =>
  `https://png.icons8.com/material/75/${color}/${piece}.png`;

export const getChessPieceIcon = (chessPieceNumber: number) => {
  switch (chessPieceNumber) {
    case 1:
      return createPieceImageUrl("pawn", "ffffff");
    case 2:
      return createPieceImageUrl("rook", "ffffff");
    case 3:
      return createPieceImageUrl("knight", "ffffff");
    case 4:
      return createPieceImageUrl("bishop", "ffffff");
    case 5:
      return createPieceImageUrl("queen", "ffffff");
    case 6:
      return createPieceImageUrl("king", "ffffff");
    case 7:
      return createPieceImageUrl("pawn", "000000");
    case 8:
      return createPieceImageUrl("rook", "000000");
    case 9:
      return createPieceImageUrl("knight", "000000");
    case 10:
      return createPieceImageUrl("bishop", "000000");
    case 11:
      return createPieceImageUrl("queen", "000000");
    case 12:
      return createPieceImageUrl("king", "000000");
    default:
      return "";
  }
};
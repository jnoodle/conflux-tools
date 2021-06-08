export default [
  {
    inputs: [
      { internalType: "uint256", name: "randomSalt", type: "uint256" },
      { internalType: "string", name: "uri_", type: "string" },
      { internalType: "string", name: "name_", type: "string" },
      { internalType: "string", name: "symbol_", type: "string" },
      {
        internalType: "contract IXiangProvider",
        name: "xiang",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      { indexed: false, internalType: "uint24", name: "nftId", type: "uint24" }
    ],
    name: "PickCard",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
      }
    ],
    name: "TransferBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "TransferSingle",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "value", type: "string" },
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" }
    ],
    name: "URI",
    type: "event"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "addAdministrator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "minter", type: "address" }],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "periodStartBlock", type: "uint256" }
    ],
    name: "addPoolPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" }
    ],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "accounts", type: "address[]" },
      { internalType: "uint256[]", name: "ids", type: "uint256[]" }
    ],
    name: "balanceOfBatch",
    outputs: [
      { internalType: "uint256[]", name: "balances", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "clearAdministrator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint16[]", name: "seriesIds", type: "uint16[]" },
      { internalType: "string", name: "poolName", type: "string" },
      { internalType: "uint16", name: "poolPeriodId", type: "uint16" }
    ],
    name: "createPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint16[]", name: "cardCount", type: "uint16[]" },
      { internalType: "uint24", name: "totalMints", type: "uint24" },
      { internalType: "string", name: "seriesName", type: "string" }
    ],
    name: "createSeries",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint16", name: "poolId", type: "uint16" },
      { internalType: "bool", name: "isEnabled", type: "bool" }
    ],
    name: "enablePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getAdministrators",
    outputs: [
      { internalType: "address[]", name: "addresses", type: "address[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCardPrices",
    outputs: [
      { internalType: "uint24[]", name: "counts", type: "uint24[]" },
      { internalType: "uint256[]", name: "prices", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinters",
    outputs: [
      { internalType: "address[]", name: "addresses", type: "address[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint24", name: "releaseCount", type: "uint24" }],
    name: "getNextCardPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolCounts",
    outputs: [{ internalType: "uint16", name: "count", type: "uint16" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint16", name: "poolId", type: "uint16" }],
    name: "getPoolInfo",
    outputs: [
      { internalType: "uint16[]", name: "seriesIds", type: "uint16[]" },
      { internalType: "uint24[]", name: "seriesAvailables", type: "uint24[]" },
      { internalType: "uint24", name: "availables", type: "uint24" },
      { internalType: "uint24", name: "picks", type: "uint24" },
      { internalType: "uint16", name: "poolPeriodId", type: "uint16" },
      { internalType: "bool", name: "isEnabled", type: "bool" },
      { internalType: "string", name: "name_", type: "string" },
      { internalType: "bool", name: "isAvailable", type: "bool" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolPeriods",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint16", name: "idx", type: "uint16" }],
    name: "getSeries",
    outputs: [
      { internalType: "uint16[]", name: "cardCount", type: "uint16[]" },
      { internalType: "uint24", name: "total", type: "uint24" },
      { internalType: "uint24", name: "availables", type: "uint24" },
      { internalType: "uint24", name: "totalMints", type: "uint24" },
      { internalType: "uint24", name: "minted", type: "uint24" },
      { internalType: "bool", name: "IsUnused", type: "bool" },
      { internalType: "string", name: "seriesName", type: "string" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getSeriesCounts",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256[]", name: "nftIds", type: "uint256[]" }],
    name: "infoOfBatch",
    outputs: [
      { internalType: "uint24", name: "total", type: "uint24" },
      { internalType: "uint24[]", name: "ids", type: "uint24[]" },
      { internalType: "uint16[]", name: "series", type: "uint16[]" },
      { internalType: "uint8[]", name: "cardIdx", type: "uint8[]" },
      { internalType: "bool[]", name: "isPicked", type: "bool[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "operator", type: "address" }
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "isContract",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "lastPick",
    outputs: [
      { internalType: "uint24", name: "total", type: "uint24" },
      { internalType: "uint24[]", name: "ids", type: "uint24[]" },
      { internalType: "uint16[]", name: "series", type: "uint16[]" },
      { internalType: "uint8[]", name: "cardIdx", type: "uint8[]" },
      { internalType: "bool[]", name: "isPicked", type: "bool[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "listAll",
    outputs: [
      { internalType: "uint24", name: "total", type: "uint24" },
      { internalType: "uint24[]", name: "ids", type: "uint24[]" },
      { internalType: "uint16[]", name: "series", type: "uint16[]" },
      { internalType: "uint8[]", name: "cardIdx", type: "uint8[]" },
      { internalType: "bool[]", name: "isPicked", type: "bool[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "listAvailablePools",
    outputs: [{ internalType: "uint16[]", name: "indexes", type: "uint16[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "listUnusedSeriesIndexes",
    outputs: [
      { internalType: "uint16[]", name: "seriesIdx", type: "uint16[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint16", name: "seriesId", type: "uint16" }],
    name: "markSeriesUsed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "mintTo", type: "address" },
      { internalType: "uint16", name: "seriesId", type: "uint16" },
      { internalType: "uint8", name: "cardId", type: "uint8" }
    ],
    name: "mintNFT",
    outputs: [{ internalType: "uint24", name: "mintId", type: "uint24" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "mintTo", type: "address[]" },
      { internalType: "uint16[]", name: "seriesIds", type: "uint16[]" },
      { internalType: "uint8[]", name: "cardIds", type: "uint8[]" }
    ],
    name: "mintNFTBatch",
    outputs: [{ internalType: "uint24[]", name: "mintIds", type: "uint24[]" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint16", name: "poolId", type: "uint16" }],
    name: "pickCards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "minter", type: "address" }],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256[]", name: "ids", type: "uint256[]" },
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
      { internalType: "bytes", name: "data", type: "bytes" }
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "seriesUri",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "uri_", type: "string" }],
    name: "setSeriesUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "uri_", type: "string" }],
    name: "setUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "xiangAddress", type: "address" }
    ],
    name: "setXiangProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "tokensOf",
    outputs: [{ internalType: "uint256[]", name: "ids", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint24[]", name: "counts", type: "uint24[]" },
      { internalType: "uint256[]", name: "prices", type: "uint256[]" }
    ],
    name: "updateCardPrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "periodStartBlock", type: "uint256" }
    ],
    name: "updatePoolPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint16", name: "sId", type: "uint16" },
      { internalType: "uint16[]", name: "cardCount", type: "uint16[]" },
      { internalType: "uint24", name: "totalMints", type: "uint24" },
      { internalType: "string", name: "seriesName", type: "string" }
    ],
    name: "updateSeries",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "uri",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  }
];

// jest.setup.ts
jest.mock("@expo/vector-icons", () => ({
  Ionicons: () => "IoniconsMock",
}));

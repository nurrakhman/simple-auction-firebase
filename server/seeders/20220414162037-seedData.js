"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          fullname: "Buyer A",
          totalMoney: 500000,
          totalSpended: 0,
          role: "Buyer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "Buyer B",
          totalMoney: 600000,
          totalSpended: 0,
          role: "Buyer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "Buyer C",
          totalMoney: 900000,
          totalSpended: 0,
          role: "Buyer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "Buyer D",
          totalMoney: 1000000,
          totalSpended: 0,
          role: "Buyer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "Davinci",
          totalMoney: 0,
          totalSpended: 0,
          role: "Seller",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Collections",
      [
        {
          name: "Koleksi A",
          startDate: "2022-04-14T16:29:03.855Z",
          endDate: "2022-04-15T16:29:03.855Z",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Koleksi B",
          startDate: "2022-04-14T16:29:03.855Z",
          endDate: "2022-04-15T16:29:03.855Z",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Lots",
      [
        {
          name: "Lot 1",
          collectionId: 1,
          sellerId: 5,
          startingBid: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lot 2",
          collectionId: 1,
          sellerId: 5,
          startingBid: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lot 3",
          collectionId: 1,
          sellerId: 5,
          startingBid: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lot 4",
          collectionId: 2,
          sellerId: 5,
          startingBid: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lot 5",
          collectionId: 2,
          sellerId: 5,
          startingBid: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          userId: 5,
          status: "transfer",
          price: 50000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          status: "transfer",
          price: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Transactions", null, {});
    await queryInterface.bulkDelete("Lots", null, {});
    await queryInterface.bulkDelete("Collections", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  }
};

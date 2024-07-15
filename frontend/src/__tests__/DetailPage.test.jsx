import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DetailPage from '../Pages/DetailPage/DetailPage';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      id: 10,
      img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
      model: "Roma Basic Sneaker",
      price: "150",
      brand: "Puma",
      description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
      releaseDate: "Jan 01, 2024",  
      sizesAvailable: [
        {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
        {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
        {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
        {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
        {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
        {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
      ]
    }),
  })
);

beforeAll(() => {
  // Clear fetch mock before each test
  fetch.mockClear();
});

test('test logic in detail page', async () => {

  render(<DetailPage/>)

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledTimes(1); 
    const sizeButton = screen.getByText('M 8.5 / W 10 (2 left)');
    fireEvent.click(sizeButton);

    expect(screen.getByText('1')).toBeInTheDocument();

    const increaseBtn = screen.getByText('+');
    fireEvent.click(increaseBtn);

    expect(screen.getByText('2')).toBeInTheDocument();

    fireEvent.click(increaseBtn);
    expect(screen.getByText('2')).toBeInTheDocument();

    fireEvent.click(increaseBtn);
    expect(screen.getByText('2')).toBeInTheDocument();

    fireEvent.click(increaseBtn);
    expect(screen.getByText('2')).toBeInTheDocument();

  });

  
});

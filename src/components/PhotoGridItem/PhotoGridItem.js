import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const jpgSrcSet = [
    src,
    src.replace(/.jpg$/, '@2x.jpg 2x'),
    src.replace(/.jpg$/, '@3x.jpg 3x'),
  ].join(", ")
  const avifSrcSet = [
    src,
    src.replace(/.jpg$/, '@2x.avif 2x'),
    src.replace(/.jpg$/, '@3x.avif 3x'),
  ].join(", ")
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={avifSrcSet} />
          <Image alt={alt} srcSet={jpgSrcSet} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;

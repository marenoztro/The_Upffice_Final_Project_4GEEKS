"""empty message

<<<<<<<< HEAD:migrations/versions/36e6d06472ec_.py
Revision ID: 36e6d06472ec
Revises: 
Create Date: 2022-10-21 23:29:14.253491
========
Revision ID: 70f69926a1c8
Revises: 
Create Date: 2022-10-20 01:58:54.361282
>>>>>>>> 0eabd27ab9af319c0895668511ff4edc95fc9310:migrations/versions/70f69926a1c8_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/36e6d06472ec_.py
revision = '36e6d06472ec'
========
revision = '70f69926a1c8'
>>>>>>>> 0eabd27ab9af319c0895668511ff4edc95fc9310:migrations/versions/70f69926a1c8_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('spaces',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=False),
    sa.Column('images', sa.String(length=400), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('spaces')
    # ### end Alembic commands ###
